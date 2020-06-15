from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Bluejibble@123'
app.config['MYSQL_DB'] = 'TicketManagement'

mysql = MySQL(app)

@app.route('/')
def preLoadData():
    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE Company (id int NOT NULL AUTO_INCREMENT,name varchar(50) NOT NULL,description varchar(255), PRIMARY KEY(id));''')
    mysql.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE User (id int NOT NULL AUTO_INCREMENT,name varchar(100) NOT NULL,phone varchar(50)NOT NULL, password varchar(100) NOT NULL, role varchar(100) NOT NULL, PRIMARY KEY(id));''')
    mysql.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE Tickets (id int NOT NULL AUTO_INCREMENT,title varchar(50) NOT NULL,description varchar(255),raisedOn DATE,status VARCHAR(100),company VARCHAR(100) NOT NULL, company_id int, user_id int, PRIMARY KEY(id), FOREIGN KEY(company_id) REFERENCES Company(id), FOREIGN KEY(user_id) REFERENCES User(id));''')
    mysql.connection.commit()
    cur.close()

    

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Company (name, description) VALUES ("Plumbing","Report here for Plumbing related issues"),("Electricity","Report here for Electricity related issues."),("Sanitation","Report here for Sanitation related issues."),("Park Authority","Report here for issues related to maintainance or security within Parks."),("Townhall","Report your issues here and they shall be resolved in a fair and democratic manner");''')
    cur.connection.commit()
    cur.close()


    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO User (name, phone, password, role) VALUES ("Abhishek Ray","9438155726","admin","admin"),("Kartik Arya","123123123","user","user"),("Pallavi Mehra","234234234","user","user");''')
    cur.connection.commit()
    cur.close()


    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Tickets (title, description, raisedOn, status, company, company_id, user_id) VALUES ("Low wire hanging","Dangerously low wire hanging. Fix immediately.","2020-02-03","On Hold","Electricity",2,2),("Underground Pipe Burst","The fire hydrant is broken causing the water to spray.","2020-04-05","On Hold","Plumbing",1,2),("Sparks near Pole","Electricity Pole was giving off sparks near jagda bridge. Fix ASAP.","2020-05-06","Pending","Electricity",2,3),("Water pooling near low electricity pole","There has been an accumulation of water near an low electricity pole.","2020-06-12","Pending","Electricity",2,3),("Miscreants disturbing atmosphere.","People are riding their bicycles on walking trail.","2020-06-10","On Hold","Park Authority",4,2);''')
    cur.connection.commit()
    cur.close()

    
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Company;''')
    result = cur.fetchall()
    companyData = []
    for row in result:
        companyData.append(row)
    cur.close()
    
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Tickets;''')
    result = cur.fetchall()
    ticketData = []
    for row in result:
        ticketData.append(row)
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM User;''')
    result = cur.fetchall()
    userData = []
    for row in result:
        userData.append(row)
    cur.close()

    return {'companyData':companyData,'ticketData':ticketData,'userData':userData}


@app.route("/signup",methods=['POST'])
def signUpUser():
    name = request.json['name']
    phone = request.json['phone']
    password = request.json['password']
    role = request.json['role']
    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO User (name, phone, password, role) VALUES ('%s','%s','%s','%s');'''%(name,phone,password,role))
    cur.connection.commit()
    cur.close()

    return {"signedUp":"true"}


@app.route("/login",methods=['POST'])
def loginUser():
    phone = request.json['phone']
    password = request.json['password']
    cur = mysql.connection.cursor()
    
    cur.execute('''SELECT * FROM User WHERE User.phone='%s' AND User.password='%s';'''%(phone,password))
    result = cur.fetchall()
    user = []
    flag = False  
    for row in result:
        flag = True 
        user.append(row)

    cur.close()
    print(user, " is USER")
    if flag == True:
        payload = {'user':user}
        key = 'secret'
        encodeJwt  = jwt.encode(payload, key)
        return {"token":encodeJwt.decode(),"user":payload,"error":"false"}
    
    else:
        return {"token":'',"user":{},"error":"true"}




@app.route('/fetch/companies')
def fetchCompanies():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Company;''')
    result = cur.fetchall()
    companyData = []
    for row in result:
        companyData.append(row)
    cur.close()

    return {'companyData':companyData}


@app.route('/fetch/tickets',methods=['POST'])
def fetchTickets():
    user = request.json['user']
    role = user[4]
    id = user[0]
    cur = mysql.connection.cursor()
    if role=="admin":
        cur.execute('''SELECT t.id,t.title,t.description,t.status,t.company,t.raisedOn,t.company_id,t.user_id,u.name FROM Tickets as t JOIN User as u ON t.user_id=u.id;''')
    elif role=="user":
        cur.execute('''SELECT t.id,t.title,t.description,t.status,t.company,t.raisedOn,t.company_id,t.user_id,u.name FROM Tickets as t JOIN User as u ON t.user_id = u.id WHERE t.user_id=%s;'''%(id))
    result = cur.fetchall()
    ticketData = []
    for row in result:
        ticketData.append(row)
    cur.close()

    return {'ticketData':ticketData}

@app.route('/fetch/status',methods=['POST'])
def fetchStatus():
    user = request.json['user']
    role = user[4]
    id = user[0]
    cur = mysql.connection.cursor()
    if role=="admin":
        cur.execute('''SELECT COUNT(Tickets.id),Tickets.status FROM Tickets GROUP BY Tickets.status;''')
    elif role=="user":
        cur.execute('''SELECT COUNT(Tickets.id),Tickets.status FROM Tickets WHERE Tickets.user_id=%s GROUP BY Tickets.status ;'''%(id))
    result = cur.fetchall()
    statusData = []
    for row in result:
        statusData.append(row)
    cur.close()

    return {'status':statusData}

@app.route('/fetch/count',methods=['POST'])
def fetchCount():
    user = request.json['user']
    role = user[4]
    id = user[0]
    cur = mysql.connection.cursor()
    if role=="admin":
        cur.execute('''SELECT COUNT(Tickets.id),Tickets.company FROM Tickets GROUP BY Tickets.company;''')
    elif role=="user":
        cur.execute('''SELECT COUNT(Tickets.id),Tickets.company FROM Tickets WHERE Tickets.user_id=%s GROUP BY Tickets.company ;'''%(id))
    result = cur.fetchall()
    countData = []
    for row in result:
        countData.append(row)
    cur.close()

    return {'count':countData}


@app.route('/add/company',methods=['POST'])
def addCompany():
    name = request.json['name']
    description = request.json['description']

    print(name,description," are name, description sent for addition to DB")

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Company (name, description) VALUES ("%s","%s");'''%(name,description))
    cur.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Company;''')
    result = cur.fetchall()
    companyData = []
    for row in result:
        companyData.append(row)
    cur.close()

    return {'companyData':companyData}


@app.route('/add/ticket',methods=['POST'])
def addTicket():
    title = request.json['title']
    description = request.json['description']
    raisedOn = request.json['raisedOn']
    status = request.json['status']
    company = request.json['company']
    company_id = request.json['company_id']
    user_id = request.json['user_id']

    print(title,description,raisedOn,status,company,company_id,user_id," are title,description,raisedOn,status,company,company_id,user_id sent for addition to DB")

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Tickets (title, description, raisedOn, status, company, company_id, user_id) VALUES ("%s","%s","%s","%s","%s","%s","%s");'''%(title,description,raisedOn,status,company,company_id,user_id))
    cur.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Tickets;''')
    result = cur.fetchall()
    ticketData = []
    for row in result:
        ticketData.append(row)
    cur.close()

    return {'ticketData':ticketData}



@app.route('/modify/ticket',methods=['POST'])
def modifyTicket():
    id = request.json['id']
    title = request.json['title']
    description = request.json['description']
    raisedOn = request.json['raisedOn']
    status = request.json['status']
    company = request.json['company']

    print(id,title,description,raisedOn,status,company," are id,title,description,raisedOn,status,company sent for addition to DB")

    cur = mysql.connection.cursor()
    cur.execute('''UPDATE Tickets SET description = "%s", status = "%s" WHERE id=%s;'''%(description,status,id))
    cur.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Tickets;''')
    result = cur.fetchall()
    ticketData = []
    for row in result:
        ticketData.append(row)
    cur.close()

    return {'ticketData':ticketData}