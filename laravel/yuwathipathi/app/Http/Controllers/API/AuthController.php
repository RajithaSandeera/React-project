<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

 
class AuthController extends Controller
{
    public function register(Request $request)
     {
        $validator = Validator::make($request->all(),[
            'name' =>'required|max:191',
            'email' => 'required|unique:users,email',
            'password' =>'required',
        ]);
        if($validator ->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->message(),
            ]);
        } 
        else
        {
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email, 
                'password'=>Hash::make($request->password),
              
            ]);
            $token =  $user->createToken($user->email.'_Token')->plainTextToken; 

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Registered Sucessfully',
            ]);
        }
    }
}
