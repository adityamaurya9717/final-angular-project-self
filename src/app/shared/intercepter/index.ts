import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";

export const intercepts=[
{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true,
}


]