@extends('admin.layouts.master')
@section("content")
<router-view :key="$route.fullPath"></router-view>
@endsection