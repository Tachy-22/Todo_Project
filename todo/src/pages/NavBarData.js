import { AiFillHome } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { BsCalendarRange } from "react-icons/bs";
import styled from "styled-components";
const Home = styled(AiFillHome)`
  color: white;
  transform: scale(1.5);
  margin: 5%;
`;
const Todo = styled(RiTodoFill)`
  color: white;
  transform: scale(1.5);
  margin: 5%;
`;
const Organizer = styled(BsCalendarRange)`
  color: white;
  transform: scale(1.5);
  margin: 5%;
`;

const NavBarData = [
  { path: "/", title: "Home", cname: "nav-text", icon: <Home /> },
  { path: "todo_list", title: "Todo List", cname: "nav-text", icon: <Todo /> },
  {
    path: "task_organizer",
    title: "Task Organizer",
    cname: "nav-text",
    icon: <Organizer />,
  },
];
export default NavBarData;
