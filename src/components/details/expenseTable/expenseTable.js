import React from "react";
import {Table} from "antd";
//import antd styles
import 'antd/dist/antd.css'

function ExpenseTable(props){
    //columns
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Product Purchased',
          dataIndex: 'productPurchased',
          key: 'productPurchased',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        }
    ]
    return(
        <div id="expenseTable">
            <div>
                <Table columns={columns} dataSource={props.details}/>
            </div>
        </div>
    )
}
export default ExpenseTable;