export interface AdminReqDto{
    name?: string | null;
    description?: string | null;
    position?: number | null;
    image?: string | null;
    video?: string | null;
}
export interface ResponseDto {
  name: string;
  description: string;
  image: string;
  position: number;
  video: string;
  id: string; 
}

export interface AdminResponse {
  name: string;
  description: string;
  position: number;
  image: string;
  video: string;
  id: string;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}