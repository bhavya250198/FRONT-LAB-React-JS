import React from "react";
import {Row,Col} from "antd";

const TotalDetails=({details,detailsByName})=>{
let totalDetails= ()=>{
    let totalExpense=0;
    for(var i =0;i<details.length;i++)
        {
            totalExpense+=details[i].price;
        }
        return totalExpense;
}

    return(
        <div>
            <Row>
                <Col span={6}>
                    <h4>Total Expense</h4>
                </Col>
                <Col span={6}>
                    <h4>{totalDetails()}</h4>
                </Col>
            </Row>
            {detailsByName.map((item,index)=>(
                <Row key={index}>
                    <Col span={6}>
                    {item.name} paid:
                    </Col>
                    <Col span={6}>
                    {item.price}
                    </Col>
                </Row>
            ))}
        </div>
    )
}
export default TotalDetails;