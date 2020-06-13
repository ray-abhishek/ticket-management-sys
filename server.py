from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Blacksnow@121'
app.config['MYSQL_DB'] = 'TicketManagement'

mysql = MySQL(app)

@app.route('/')
def preLoadData():
    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE Company (id int NOT NULL AUTO_INCREMENT,name varchar(50) NOT NULL,description varchar(255), PRIMARY KEY(id));''')
    mysql.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE Tickets (id int NOT NULL AUTO_INCREMENT,title varchar(50) NOT NULL,description varchar(255),raisedOn DATE,status VARCHAR(100),company VARCHAR(100) NOT NULL, PRIMARY KEY(id));''')
    mysql.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Company (name, description) VALUES ("Plumbing","Report here for Plumbing related issues"),("Electricity","Report here for Electricity related issues."),("Garbage Disposal","Report here for Garbage Disposal related issues."),("Park Authority","Report here for issues related to maintainance or security within Parks."),("Townhall","Be a citizen advocate. Report your issues here and they shall be resolved in a fair and democratic manner");''')
    cur.connection.commit()
    cur.close()

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Tickets (title, description, raisedOn, status, company) VALUES ("Low wire hanging","Dangerously low wire hanging. Fix immediately.","2020-02-03","On Hold","Electricity"),("Underground Pipe Burst","The fire hydrant is broken causing the water to spray.","2020-04-05","On Hold","Plumbing"),("Sparks near Pole","Electricity Pole was giving off sparks near jagda bridge. Fix ASAP.","2020-05-06","Pending","Electricity"),("Water pooling near low electricity pole","There has been an accumulation of water near an low electricity pole.","2020-06-12","Pending","Electricity"),("Miscreants disturbing atmosphere.","People are riding their bicycles on walking trail.","2020-06-10","On Hold","Park Authority");''')
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

    return {'companyData':companyData,'ticketData':ticketData}


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


@app.route('/fetch/tickets')
def fetchTickets():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM Tickets;''')
    result = cur.fetchall()
    ticketData = []
    for row in result:
        ticketData.append(row)
    cur.close()

    return {'ticketData':ticketData}

@app.route('/fetch/status')
def fetchStatus():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT COUNT(Tickets.id),Tickets.status FROM Tickets GROUP BY Tickets.status;''')
    result = cur.fetchall()
    statusData = []
    for row in result:
        statusData.append(row)
    cur.close()

    return {'status':statusData}

@app.route('/fetch/count')
def fetchCount():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT COUNT(Tickets.id),Tickets.company FROM Tickets GROUP BY Tickets.company;''')
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

    print(title,description,raisedOn,status,company," are title,description,raisedOn,status,company sent for addition to DB")

    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO Tickets (title, description, raisedOn, status, company) VALUES ("%s","%s","%s","%s","%s");'''%(title,description,raisedOn,status,company))
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