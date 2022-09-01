import React, { useState } from "react";

const UserFind: React.FC = () => {

    const users = [
        {
            name:'JeanJean',
        },
        {
            name:'Maurice',
        },
        {
            name:'Bernard',
        },
        {
            name:'Saucisse',
        },
        {
            name:'Marceline',
        },
    ]

    const [text,setText] = React.useState<string>('');
    const [userList, setUserList]=useState<{name : string}[] | undefined>(users);


    const handleOnClick = () => {
        const findUsers = 
        userList && userList?.length > 0 
        ? userList?.filter( u => u.name == text )
        : undefined;
        setUserList(findUsers);
    }


    return(
        <div>
            <h1>SearchEngine</h1>

            <div>
                <input 
                type="text"
                placeholder="Search term" 
                value={text} 
                onChange={(e) => {setText(e.target.value); setUserList(users)}}
                />
                <button disabled={!text} onClick={handleOnClick}>
                    Search
                </button>
            </div>
            <div className="toto">
                {userList && userList?.length>0 && userList?.map((user)=>{
                    return(
                        <div>
                            <h3>{user?.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserFind;