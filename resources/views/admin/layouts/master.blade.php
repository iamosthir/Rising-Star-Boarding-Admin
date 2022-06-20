@php
    $countPendings = count(\App\Models\BoardingBookings::where("status","Pending")->get())+count(\App\Models\GroomingBooking::where("status","Pending")->get())
@endphp
<!DOCTYPE html>
<html lang="en">


<!-- index.html  21 Nov 2019 03:44:50 GMT -->
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Rising Star Chows</title>
  <!-- General CSS Files -->
  <link rel="stylesheet" href="{{ asset("assets/css/app.min.css") }}">
  <!-- Template CSS -->
  <link rel="stylesheet" href="{{ asset("assets/css/style.css") }}">
  <link rel="stylesheet" href="{{ asset("assets/css/components.css") }}">
  <!-- Custom style CSS -->
  <link rel="stylesheet" href="{{ asset("assets/css/custom.css") }}">
  <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
  <link rel='shortcut icon' type='image/x-icon' href='{{ asset("assets/img/favicon.ico") }}' />
</head>

<body>
  <div class="loader"></div>
  <div id="admin">
    <vue-progress-bar></vue-progress-bar>
    <div class="main-wrapper main-wrapper-1">
      <div class="navbar-bg"></div>
      <nav class="navbar navbar-expand-lg main-navbar sticky">
        <div class="form-inline mr-auto">
          <ul class="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg
									collapse-btn"> <i data-feather="align-justify"></i></a></li>
            <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
                <i data-feather="maximize"></i>
              </a></li>
            <li>
              <form class="form-inline mr-auto">
                <div class="search-element">
                  <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200">
                  <button class="btn" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav navbar-right">

          <app-notification></app-notification>

          <li class="dropdown"><a href="#" data-toggle="dropdown"
              class="nav-link dropdown-toggle nav-link-lg nav-link-user">
               @if(auth()->user()->photo != "")
               <img style="width: 30px; height: 30px; object-fit: cover;" id="headerUserImg" alt="image" src="{{ asset("uploads/admin/".auth()->user()->photo) }}"
                class="user-img-radious-style">
               @else
               <img style="width: 30px; height: 30px; object-fit: cover;" id="headerUserImg" alt="image" src="{{ asset("images/user-placeholder.png") }}"
                class="user-img-radious-style">
               @endif 
                <span class="d-sm-none d-lg-inline-block"></span></a>
            <div class="dropdown-menu dropdown-menu-right pullDown">
              <div class="dropdown-title">Hello {{ auth()->user()->name }}</div>
              <router-link :to="{ name: 'profile' }" class="dropdown-item has-icon"> <i class="far
										fa-user"></i>My Profile
              </router-link>
              <router-link :to="{ name: 'admin-list' }" class="dropdown-item has-icon"> <i class="far
										fa-user"></i>Admin List
              </router-link>
              <div class="dropdown-divider"></div>
              <a onclick="event.preventDefault();
                  document.getElementById('logout-form').submit();" href="#"
                  class="dropdown-item has-icon text-danger"> <i class="fas fa-sign-out-alt"></i>
                Logout
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                  @csrf
              </form>
            </div>
          </li>
        </ul>
      </nav>
      <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="index.html"> <img alt="image" src="{{ asset("assets/img/logo.png") }}" class="header-logo" /> <span
                class="logo-name">Rising Star</span>
            </a>
          </div>
          <ul class="sidebar-menu">
            {{-- Main --}}
            <li class="menu-header">Main</li>
            <li class="dropdown">
              <router-link :to="{name : 'home'}" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></router-link>
            </li>

            {{-- Customer --}}
            <li class="menu-header">Customer</li>
            <li class="dropdown">
              <router-link :to="{name : 'customer.list'}" class="nav-link"><i class="fas fa-user"></i><span>Customers</span></router-link>
            </li>
            {{-- End --}}

            {{-- Kennel --}}
            <li class="menu-header">Kennel & Pets</li>
            <li class="dropdown">
              <router-link :to="{name : 'kennel.list'}" class="nav-link"><i class="fas fa-home"></i><span>Kennels</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'pets'}" class="nav-link"><i class="fas fa-dog"></i><span>Pets</span></router-link>
            </li>
            {{-- End --}}

            {{-- Bookings --}}
            <li class="menu-header">Pending Lists</li>
            <li class="dropdown">
              <router-link :to="{name : 'admin-pending'}" class="nav-link"><i class="fas fa-ticket-alt"></i><span>Pending Bookings
                @if($countPendings >0)
                  <span class="text-danger">({{ $countPendings }})</span>
                @endif </span></router-link>
            </li>


            <li class="menu-header">Booking & Appointments</li>
            <li class="dropdown">
              <router-link :to="{name : 'booking.new'}" class="nav-link"><i class="fas fa-ticket-alt"></i><span>New Booking</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'booking.draft'}" class="nav-link"><i class="fas fa-ticket-alt"></i><span>Draft Bookings</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name: 'boarding'}" class="nav-link"><i class="fas fa-plane"></i> <span>Boarding List</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'grooming'}" class="nav-link"><i class="fas fa-tag"></i><span>Grooming List</span></router-link>
            </li>
            
            {{-- End --}}


            {{-- Bookings --}}
            <li class="menu-header">Main Site</li>
            <li class="dropdown">
              <router-link :to="{name : 'admin-site-data'}" class="nav-link"><i data-feather="aperture"></i><span>Site Options</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'admin.contact'}" class="nav-link"><i data-feather="map-pin"></i><span>Contact Information</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'admin-seo'}" class="nav-link"><i data-feather="search"></i><span>SEO</span></router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name : 'admin-email'}" class="nav-link"><i data-feather="mail"></i><span>EMAIL SETUP</span></router-link>
            </li>
            {{-- End --}}


          </ul>
        </aside>
      </div>
      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
            @yield('content')
        </section>

      </div>
      <footer class="main-footer">
        <div class="footer-left">
          <a href="templateshub.net">Templateshub</a></a>
        </div>
        <div class="footer-right">
        </div>
      </footer>



    </div>
  </div>
  <script src="{{ asset("js/app.js") }}"></script>
  <!-- General JS Scripts -->
  <script src="{{ asset("assets/js/app.min.js") }}"></script>
  <!-- Page Specific JS File -->
  <script src="{{ asset("assets/js/page/index.js") }}"></script>
  <!-- Template JS File -->
  <script src="{{ asset("assets/js/scripts.js") }}"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
  <script>
    window.csrf = "{{ csrf_token() }}";
  </script>
</body>


<!-- index.html  21 Nov 2019 03:47:04 GMT -->
</html>