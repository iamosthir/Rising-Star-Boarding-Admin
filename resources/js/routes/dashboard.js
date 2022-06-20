import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const prefix = "/admin/";

// 
import Home from "../components/pages/home/Home.vue";
//

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    linkActiveClass: "active",
    routes:[
        {
            path: prefix + "home",
            name: "home",
            component: Home,
            meta: {
                title: "Dashboard-Home"
            }
        },
        // Customer
        {
            path: prefix + "customers",
            component: ()=>import("../components/pages/customer/Customer.vue"),
            children: [
                {
                    path: "/",
                    name: "customer.list",
                    component: ()=> import("../components/pages/customer/List.vue"),
                    meta:{
                        title: "Customer List"
                    }
                },
                {
                    path: "create-new",
                    name: "customer.create",
                    component: ()=>import("../components/pages/customer/Create.vue"),
                    meta:{
                        title: "Create New Customer"
                    }
                },
                {
                    path: "profile/:customerId",
                    name: "customer.profile",
                    component: ()=>import("../components/pages/customer/Profile.vue"),
                    meta:{
                        title: "Customer Profile"
                    }
                }
            ]
        },
        // Bookings
        {
            path: prefix + "bookings",
            component: ()=>import("../components/pages/bookings/Bookings.vue"),
            children: [
                {
                    path : "/",
                    name: 'booking.new',
                    component: ()=>import("../components/pages/bookings/NewBooking.vue"),
                    meta:{
                        title: "New Booking"
                    }
                },
                {
                    path: "boarding/customer/:id",
                    name: "booking.boarding",
                    component: ()=>import("../components/pages/bookings/Boarding.vue"),
                    meta:{
                        title: "Booking for boarding"
                    }
                },
                {
                    path: "grooming/customer/:id",
                    name: "booking.grooming",
                    component: () => import("../components/pages/bookings/Grooming.vue"),
                    meta: {
                        title: "Booking for grooming"
                    }
                },

            ]
        },
        // Grooming List
        {
            path: prefix + "grooming-list",
            component: () => import("../components/pages/bookings/list/Index.vue"),
            name: 'grooming',
            redirect: {name: 'grooming.calendar-view'},
            children:[
                {
                    path: "list-view",
                    name: "grooming.list-view",
                    component: ()=>import("../components/pages/bookings/list/GroomingList.vue"),
                    meta:{
                        title: "Groomings - List View"
                    }
                },
                {
                    path: "calendar-view",
                    name: "grooming.calendar-view",
                    component: () => import("../components/pages/bookings/list/GroomingCalendar.vue"),
                    meta: {
                        title: "Groomings - Calendar view"
                    }
                },
                {
                    path: "edit-grooming-data/:id",
                    name: "grooming.edit",
                    component: ()=>import("../components/pages/bookings/list/GroomingEdit.vue"),
                    meta:{
                        title: "Edit boooking"
                    }
                }
            ]
        },

        // Kennel Spaces
        {
            path: prefix+"kennel",
            component: ()=>import("../components/pages/kennel/Kennel.vue"),
            children:[
                {
                    path: "/",
                    name: "kennel.list",
                    component: ()=>import("../components/pages/kennel/List.vue"),
                    meta:{
                        title: "Kennel Spaces"
                    }
                },
                {
                    path: "create",
                    name: "kennel.create",
                    component: ()=>import("../components/pages/kennel/Create.vue"),
                    meta:{
                        title: "Create new kennel"
                    }
                }
            ]
        },

        // Boarding List
        {
            path: prefix+"boarding-list",
            component: ()=>import("../components/pages/boarding/Index.vue"),
            name: "boarding",
            redirect: {name:'boarding.calendar'},
            children:[
                {
                    path: "calendar-view",
                    name: "boarding.calendar",
                    component: ()=>import("../components/pages/boarding/Calendar.vue"),
                    meta:{
                        title: "Boarding List"
                    }
                },
                {
                    path: "list-view",
                    name: "boarding.list",
                    component: ()=>import("../components/pages/boarding/List.vue"),
                    meta:{
                        title: "Boarding List"
                    }
                },
                {
                    path: "edit/:id",
                    name: "boarding.edit",
                    component: ()=>import("../components/pages/boarding/Edit.vue"),
                    meta:{
                        title: "Edit Boarding"
                    }
                }
            ]
        },
        // Pricing
        // {
        //     path: prefix+"pricing",
        //     name: "pricing",
        //     component: ()=>import("../components/pages/pricing/Pricing.vue"),
        //     meta:{
        //         title: "Pricing"
        //     }
        // },
        // 
        // Pets
        {
            path: prefix+"pets",
            name: "pets",
            component: ()=>import("../components/pages/pets/Index.vue"),
            redirect: {name: 'pets.list'},
            children:[
                {
                    path: '',
                    name: "pets.list",
                    component: ()=>import("../components/pages/pets/List.vue"),
                    meta:{
                        title: "All Pets"
                    }
                },
                {
                    path: "details/:petId",
                    name: "pets.profile",
                    component: ()=>import("../components/pages/pets/PetProfile.vue"),
                    meta:{
                        title: "Pet Information"
                    }
                }
            ]
        },
        // Profile
        {
            path: prefix+"my-profile",
            name: "profile",
            component: ()=>import("../components/pages/admin/MyProfile.vue"),
            meta:{
                title: "My Profile"
            }
        },
        // Site Data
        {
            path: prefix+"main-site",
            name: "admin-site-data",
            component: ()=>import("../components/pages/site/Container.vue"),
            redirect: {
                name: "admin-sitedata.index",
            },
            children:[
                {
                    path:"options",
                    name: "admin-sitedata.index",
                    component: ()=>import("../components/pages/site/Index.vue"),
                    meta:{
                        title: "Site Options"
                    }
                },
                {
                    path: "banner-image",
                    name: "admin-sitedata.banner",
                    component: ()=>import("../components/pages/site/Banner/Index.vue"),
                    meta:{
                        title: "Edit Site Banner"
                    }
                },
                {
                    path: "about-us",
                    name: "admin-sitedata.about",
                    component: ()=>import("../components/pages/site/About/Index.vue"),
                    meta:{
                        title: "Edit About Us"
                    }
                },
                {
                    path: "pricing-package-list",
                    name: "admin-sitedata.pricing.list",
                    component: ()=>import("../components/pages/site/Pricings/Index.vue"),
                    meta:{
                        title: "Pricing Packages"
                    }
                },
                {
                    path: "create-pricing-package",
                    name: "admin-sitedata.create-pricing",
                    component: ()=> import("../components/pages/site/Pricings/Create.vue"),
                    meta:{
                        title: "Create new pricing package"
                    }
                },
                {
                    path: "edit-pricing-package/:id",
                    name: "admin-sitedata.edit-pricing",
                    component: ()=>import("../components/pages/site/Pricings/Edit.vue"),
                    meta:{
                        title: "Edit Pricing"
                    }
                },
                {
                    path: "terms-and-conditions",
                    name: 'admin-terms',
                    component: ()=>import("../components/pages/site/Terms/Index.vue"),
                    meta: {
                        title: "Terms & Conditions"
                    }
                },
                {
                    path: "privacy-and-policy",
                    name: "admin-privacy",
                    component: ()=>import("../components/pages/site/Privacy/Index.vue"),
                    meta: {
                        title: "Privacy and Policy"
                    }
                },
                {
                    path: "contract-form",
                    name: "admin.contract",
                    component: ()=>import("../components/pages/site/Contract/Index.vue"),
                    meta:{
                        title: "Contract Form"
                    }
                }
            ]
        },
        //
        // Notification
        {
            path: prefix+"all-notification",
            name: "admin.notification",
            component: ()=>import("../components/pages/Notification/Notification.vue"),
            meta:{
                title: "Notifications"
            }
        },
        //
        
        // Pending Bookings
        {
            path: prefix+"pending-list",
            name: "admin-pending",
            component: ()=>import("../components/pages/Pending/Container.vue"),
            redirect:{
                name: "pending.boarding"
            },
            children:[
                {
                    path: 'boarding',
                    name: 'pending.boarding',
                    component: () => import("../components/pages/Pending/Boarding.vue"),
                    meta:{
                        title: "Boarding Reservation Pending List"
                    }
                },
                {
                    path: "grooming",
                    name: "pending.grooming",
                    component : () => import("../components/pages/Pending/Grooming.vue"),
                    meta:{
                        title: "Grooming Pending List"
                    }
                }
            ]
        },
        // End
        {
            path: prefix + "admin-list",
            name: "admin-list",
            component: () => import("../components/pages/admin/AdminList.vue"),
            meta: {
                title: "Admin Lists"
            }
        },

        {
            path: prefix + "new-admin",
            name: "admin-new",
            component: () => import("../components/pages/admin/CreateAdmin.vue"),
            meta: {
                title: "Create admin"
            }
        },
        {
            path: prefix + "edit-admin/:adminId",
            name: "admin-edit",
            component: () => import("../components/pages/admin/EditAdmin.vue"),
            meta: {
                title: "Edit admin"
            }
        },

        // Contact Information
        {
            path: prefix+ "contact-information",
            name: "admin.contact",
            component: ()=>import("../components/pages/contact/Index.vue"),
            meta:{
                title: "Contact Information"
            }
        },
        // SEO
        {
            path: prefix + "seo",
            name: "admin-seo",
            component: () => import("../components/pages/Seo/Index.vue"),
            meta: {
                title: "SEO Tools"
            }

        },
        // 

        // Email
        {
            path: prefix+"email-setups",
            name: "admin-email",
            component: ()=>import("../components/pages/Email/Index.vue"),
            meta: {
                title: "Admin Email Setup"
            }
        },
        {
            path: prefix+ "edit-email/:id",
            name: "admin-email.edit",
            component: ()=>import("../components/pages/Email/Edit.vue"),
            meta: {
                title: "Edit email info"
            }
        },

        // Draft Booking
        {
            path: prefix+ "draft-booking",
            name: "booking.draft",
            component: () => import("../components/pages/boarding/DraftBoarding.vue"),
            meta : {
                title: "Draft bookings"
            }
        },

        {
            path: prefix+ "draft-booking/complete-booking/booking-id=:bookingId",
            name: "booking.draft-continue",
            component: ()=>import("../components/pages/boarding/ContinueDraftOrder.vue"),
            meta: {
                title: "Complete Order"
            }
        }

        
    ],
    scrollBehavior(to, from, savedPos) {
        if (savedPos) {
            return savedPos;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
export default router;