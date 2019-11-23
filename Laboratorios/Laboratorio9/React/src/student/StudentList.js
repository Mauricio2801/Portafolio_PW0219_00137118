import React from 'react';
import Student from './Student';

class StudentsList extends React.Component {

    renderHeader() {
        return Object.keys(new Student()).map((key, index) => {
            return (
                <th key={index}>
                    {key.substring(1)}
                </th>
            );
        });
    }

    renderBody(students) {
        return students.map(({ carnet, name, lastname, schedule }) => {
            return (
                <tr key={carnet}>
                    <td>{carnet}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{schedule}</td>
                    <td>
                        <button  onClick={() => {this.props.onDelete(carnet)}}>Delete</button>
                    </td>
                    <td>
                         <input onClick ={()=>{this.props.onUpdate(carnet)}}></input>
                    </td>
                </tr>
            );
        });
      
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.renderHeader()}
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderBody(this.props.students)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentsList;