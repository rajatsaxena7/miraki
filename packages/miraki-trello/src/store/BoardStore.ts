import { getTodosGroupedByColumns } from '@/lib/getTodosGroupedByColumns';
import { create } from 'zustand'




interface BoardState{
    board:Board;
getBoard:() =>void;
setBoardState:(board:Board)=>void;
}
export const useBoardStore = create<BoardState>((set) => ({
  board:{
    columns:new Map<TypedColumn, Column>()
  },
  getBoard:async ()=>{
    const board = await getTodosGroupedByColumns();
    set ({board});
    
  },
  setBoardState: (board) => {
    console.log("Updating board state to:", board);
    set({ board });
  },
  
}));