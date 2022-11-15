import {Button, notification, Popconfirm, Space, Table, Tooltip} from "antd";
import React, {useEffect, useRef, useState} from "react";
import {apis} from "../../constants";
import {common_post} from "../../helpers";
import API from "../../configs/configAxios";
import TopHeader from "../../components/TopHeader";
import ModalAddPost from "./ModalAddPost";

function Home(){
    const [listPost, setListPost] = useState([])
    const addRef = useRef();

    useEffect(() => {
        handleGetPost()
    }, [])

    async function handleGetPost(){
        try {
            let {data} = await API.get(`https://jsonplaceholder.typicode.com/posts`);
            setListPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'body',
            dataIndex: 'body',
        },
        {
            title: 'title',
            dataIndex: 'title',
        },
    ]

    return(
        <div>
            <TopHeader
                title="Post"
                onAdd={() => addRef.current.openModal()}
            />
            <Table
                dataSource={listPost?.map((c, i) => ({...c, key: i.toString(36) + i }))}
                columns={columns}
                pagination={{pageSize : 13}}
                style = {{margin : "15px"}}
                scroll= {{y : "calc(100vh - 200px)"}}
                onRow={(record, rowIndex) => {

                }}
                // loading={loadingTable}
            />
            <ModalAddPost
                ref={addRef}
            />
        </div>
    )
}

export default Home