import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

export const UseActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
}

//Created this hook to reduce long call of dispatch
// previous call = dispatch(actionCreators.searchRepositories(term))