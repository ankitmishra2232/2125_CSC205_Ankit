from flask import Flask,render_template,request,redirect
from models import db,StudentModel
 
app = Flask(__name__)
 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
 
@app.before_first_request
def create_table():
    db.create_all()
 
@app.route('/create' , methods = ['GET','POST'])
def create():
    if request.method == 'GET':
        return render_template('createpage.html')
 
    if request.method == 'POST':

        hobby = request.form.getlist('hobbies')
        hobbies=",".join(map(str, hobby))


        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        gender = request.form['gender']
        hobbies = hobbies
        country = request.form['country']
        students = StudentModel(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            gender=gender, 
            hobbies=hobbies,
            country = country
        )
        db.session.add(students)  #using session to store value in web storage 
        db.session.commit()
        return redirect('/')
 
 
@app.route('/')  #It will show the list of student which will be stored into datalist.html
def RetrieveList():
    students = StudentModel.query.all()
    return render_template('datalist.html',students = students)
 
 
@app.route('/<int:id>')    #<int:id> is passing id and checking
def RetrieveStudent(id):
    students = StudentModel.query.filter_by(id=id).first()
    if students:
        return render_template('data.html', students = students)
    return f"Employee with id ={id} Doenst exist"
 
 
@app.route('/<int:id>/edit',methods = ['GET','POST'])
def update(id):
    student = StudentModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if student:
            db.session.delete(student)   #It will delete first then adding as new.
            db.session.commit()
  
        hobby = request.form.getlist('hobbies')
        hobbies =  ",".join(map(str, hobby)) 
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        gender = request.form['gender']
        hobbies = hobbies 
        country = request.form['country']

        student = StudentModel(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            gender=gender, 
            hobbies=hobbies,
            country = country
        )
        db.session.add(student)
        db.session.commit()
        return redirect('/')
        return f"Student with id = {id} Does nit exist"
 
    return render_template('update.html', student = student)
 
 
@app.route('/<int:id>/delete', methods=['GET','POST'])
def delete(id):
    students = StudentModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if students:
            db.session.delete(students)
            db.session.commit()
            return redirect('/')
    return render_template('delete.html')

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)