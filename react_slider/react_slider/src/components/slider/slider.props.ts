export interface IReview{
  id:number;
  name:string;
  text:string;
  image:string;
}
export interface SliderProps{
  reviews:IReview[];
}
