import React from "react";

function List5() {

    let stu = [
        { name: "raj", marks: 70, age: 21 },
        { name: "naga", marks: 54, age: 17 },
        { name: "sushila", marks: 62, age: 32 },
        { name: "shakila", marks: 81, age: 20 }
    ];

    return (
        <>
            <ol>
                {
                    stu.map((x, index) => {
                        if (x.age <= 30) {
                            return (
                                <li key={index}>{x.name}-{x.marks} - {x.age}
                                </li>
                            );
                        }
                    })
                }
            </ol>

              <ol>
                {
                    stu.map((x, index) => {
                        if (x.age <= 30) {
                            return (
                                <li key={index}>{x.name}- {x.age}
                                </li>
                            );
                        }
                    })
                }
            </ol>

            <ol>
                {
                    stu.map((x, index) => {
                        if (x.age <= 60) {
                            return (
                                <li key={index}>{x.name}- {x.marks}
                                </li>
                            );
                        }
                    })
                }
            </ol>

            <ol>
                {
                    stu.map((x, index) => {
                        if (x.age > 30) {
                            return (
                                <li key={index}>{x.name}- {x.age}
                                </li>
                            );
                        }
                    })
                }
            </ol>


           
        </>
    );
}

export default List5;