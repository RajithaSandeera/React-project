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
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|max:191',
            'password' =>'required',
        ]);
        if($validator -> fails())
        {
            return response()->json([
                'validator_errors' => $validator->messages(),
            ]);
        }
        else
        {
            $user = User::where('email',$request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password))
             {
                return response()->json([
                    'status' => 401,
                    'message' => 'Invalid Credentials',
                ]);
            
            }else
            {
                $token =  $user->createToken($user->email.'_Token')->plainTextToken; 

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>'Logged In Sucessfully',
                ]);

            }
            
        
        }
    }


    public function logout()
        {
            auth()->user()->tokens()->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Logged Out Sucessfully',
            ]);
        }
    }