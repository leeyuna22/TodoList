import { getDefaultNormalizer } from "@testing-library/react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Detail() {
    const navigate = useNavigate();
    const params = useParams();
    const todo_id = params.id;
    const todo_list = useSelector((state)=>state.todo.todos);

    return (
        <StBox>
            <StHeader>
            ID: {todo_id} 

            <StButton onClick={()=>{
            navigate(-1);
            }}> 
            Go Back
            </StButton>
             </StHeader>

             {todo_list.map((todo)=>{
                if(todo.id === Number(todo_id)){
                    return(
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>  
                        <p>{todo.body}</p>
                    </div>
                    )
                }
            })}
        </StBox>    
        )
};

const StBox = styled.div`
  margin: auto;
  border: 3px solid #ddd; 
  border-radius: 15px;
  max-width: 500px;
  height: auto;
  padding: 2em;
  margin-top: 300px;
`;

const StHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  background-color: #c4e4f8;
  border-radius: 12px;
  cursor: pointer;
`;


export default Detail;