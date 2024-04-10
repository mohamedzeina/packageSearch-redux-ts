import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';


//Created this hook instead of using useSelector because useSelector 
//does not know what's inside our Redux Store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
