<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/inversion', function (Request $request) {


    if(empty($request->post("dpto"))){
        return response()->json(
            DB::table("monto_inversion")
                ->where(["ano_carge" => $request->post("anio")])
                ->select("*")
                ->first()
        );
    }else{
        return response()->json(
            DB::table("monto_inversion_dpta")
                ->where(["ano_carge" => $request->post("anio")])
                ->where(["nombre" => $request->post("dpto")])
                ->select("*")
                ->first()
        );
    }


});

Route::post('/beneficiarios', function (Request $request) {

    if(empty($request->post("dpto"))){
        return response()->json(
            DB::table("monto_beneficiarios")
                ->where(["ano_carge" => $request->post("anio")])
                ->select("*")
                ->first()
        );
    }else{
        return response()->json(
            DB::table("monto_beneficiarios_dpta")
                ->where(["ano_carge" => $request->post("anio")])
                ->where(["nombre" => $request->post("dpto")])
                ->select("*")
                ->first()
        );
    }

});

Route::post('/vectores', function (Request $request) {

    if(empty($request->post("dpto"))){
        return response()->json(
            [
                "vectores" =>
                    DB::table("vectores")
                        ->where(["ano_carge" => $request->post("anio")])
                        ->select("*")
                        ->get(),
                "proyectos" =>
                    DB::table("view_proyecto")
                        ->where(["ano_carge" => $request->post("anio")])
                        ->select("*")
                        ->first(),
            ]
        );
    }else{
        return response()->json(
            [
                "vectores" =>
                    DB::table("vectores_dpta")
                        ->where(["ano_carge" => $request->post("anio")])
                        ->where(["nombre" => $request->post("dpto")])
                        ->select("*")
                        ->get(),
                "proyectos" =>
                    DB::table("view_proyecto_dpta")
                        ->where(["ano_carge" => $request->post("anio")])
                        ->where(["nombre" => $request->post("dpto")])
                        ->select("*")
                        ->first(),
            ]
        );
    }


});


Route::post('/viewEjeIndicativo', function (Request $request) {

    if(empty($request->post("dpto"))){
        return response()->json(
            DB::table("view_eje_indicativo")
                ->where(["ano_carge" => $request->post("anio")])
                ->select("*")
                ->first()
        );
    }else{
        return response()->json(
            DB::table("view_eje_indicativo_dpta")
                ->where(["ano_carge" => $request->post("anio")])
                ->where(["nombre" => $request->post("dpto")])
                ->select("*")
                ->first()
        );
    }

});

Route::post('/viewEjeIndicativo1', function (Request $request) {

    if(empty($request->post("dpto"))){
        return response()->json(
            DB::table("view_eje_eje")
                ->where(["ano_carge" => $request->post("anio")])
                ->select("*")
                ->get()
        );
    }else{
        return response()->json(
            DB::table("view_eje_eje_dpta")
                ->where(["ano_carge" => $request->post("anio")])
                ->where(["nombre" => $request->post("dpto")])
                ->select("*")
                ->get()
        );
    }

});


Route::post('/viewEjeIndicativo1', function (Request $request) {

    if(empty($request->post("dpto"))){
        return response()->json(
            DB::table("view_eje_eje")
                ->where(["ano_carge" => $request->post("anio")])
                ->select("*")
                ->get()
        );
    }else{
        return response()->json(
            DB::table("view_eje_eje_dpta")
                ->where(["ano_carge" => $request->post("anio")])
                ->where(["nombre" => $request->post("dpto")])
                ->select("*")
                ->get()
        );
    }

});

Route::post('/dependencias', function (Request $request) {

    return response()->json(
        DB::table("view_dependencias")
            ->select("*")
            ->get()
    );
});


