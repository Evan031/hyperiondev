import './Task8.css';

const userInfo = [
    {
        name: 'Evan',
        surname: 'Taylor',
        date_of_birth: '02/06/1992',
        country: 'South Africa',
        email: 'e.taylor187031@gmail.com',
        telephone: '083-377-7473',
        company: 'Semantica',
        profile_picture: 'https://www.semantica.co.za/wp-content/uploads/2021/06/Evan-1.png',
        interests: ['coding', 'fighting', 'drinking', 'hip-hop'],
    }
];

function Task8() {
    return (
        <div className="task8">
            {userInfo.map((data, key) => {
                return (
                    <div key={key}>
                        {data.name +
                            ' , ' +
                            data.surname +
                            ' ,' +
                            data.date_of_birth +
                            ', ' +
                            data.country}
                    </div>
                );
            })}
        </div>
    );
}

export default Task8;
