



    var a = {
        stName: 'it',
        protocol: 'https',
        isOnline: true,
        students: ['ivan', 'andrey', 'farid',],
        classroom: {
            teacher: {
                tName: 'Teacher1',
                age: 18
            }
        }

    }

    console.log(a.stName)
    console.log(a.classroom.teacher.tName)

    var b = {...a}

    b.stName='Cool!'

    console.log(b.stName)

    b.classroom.teacher.tName='Teacher2'

    console.log(a.classroom.teacher.tName)
    console.log(b.classroom.teacher.tName)