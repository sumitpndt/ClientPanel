import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard/dashboard1', title: 'Dashboards', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
            
            
        ]
    },
    {
        path: '/starter', title: 'Files', icon: 'mdi mdi-file-multiple', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
           
        ]
    },
    
    {
        path: '', title: 'Edit', icon: 'mdi mdi-tooltip-edit', class: 'has-arrow two-column', label: '', labelClass: '', extralink: false,
        submenu: [
            /*{ path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/toastr', title: 'Toster', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/upload', title: 'File Upload', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/editor', title: 'Editor', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/dragndrop', title: 'Dragndrop', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },*/
        ]
    },
    {
        path: '', title: 'View', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            /*{
                path: '/widgets', title: 'Widgets', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
            {
                path: '', title: 'Forms', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/forms/basicform', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/forms/formvalidation', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/component/typehead', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/component/datepicker', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    
                ]
            },
            {
                path: '', title: 'Setup', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Drivers & Vihicles', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    
                ]
            },
            {
                path: '', title: 'Customers', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/icons/fontawesome', title: 'Fontawesome', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/icons/simpleline', title: 'Simple Line Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/icons/material', title: 'Material Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },*/
            
        ]
    },

    {
        path: '', title: 'Setup', icon: 'mdi mdi-widgets', class: 'has-arrow two-column', label: '', labelClass: '', extralink: false,
        submenu: [
           
			 {
                path: '/sample-pages/sysconfig', title: 'System Configuration', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/parameters', title: 'Parameters', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			
			 {
                path: '/sample-pages/companies', title: 'Companies', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/partner_companies', title: 'Partner Companies', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/booking_classes', title: 'Booking Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/customer_types', title: 'Customer types', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/booking_types', title: 'Booking types', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/newspapers', title: 'Newspapers', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/beverages', title: 'Beverages', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/consumables', title: 'Consumables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/airports', title: 'Airports', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/hotels', title: 'Hotels', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/stations', title: 'Stations', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/other_addresses', title: 'Other addresses', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/driver_Shifts', title: 'Driver Shifts', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/regions', title: 'Regions', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/salutations', title: 'Salutations', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/bank_holidays', title: 'Bank holidays', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/mileage_tariff', title: 'Mileage tariff', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/journey_tariff', title: 'Journey tariff', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/point_point_tariff', title: 'Point to point tariff', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/hourly_rate_tariff', title: 'Hourly rate tariff', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/tariff_discounts', title: 'Tariff discounts', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/adress', title: 'Adress', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/passengrs', title: 'Passengrs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/airlines', title: 'Airlines', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/flight_destinatons', title: 'Flight destinatons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			
            
        ]
    },
    {
        path: '', title: 'Drivers & Vehicles', icon: 'mdi mdi-car', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
           {
                path: '/driver', title: 'Drivers', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/vehicle', title: 'Vehicle', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/reminders', title: 'Reminders', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/driver_expenses', title: 'Driver expenses', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/driver_alert', title: 'Driver alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/import_excel', title: 'Import drivers from Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/track_drivers', title: 'Track on-shift drivers', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
        ]
    },
	 {
        path: '', title: 'Partners', icon: 'mdi mdi-group', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
           
        ]
    },
    {
        path: '', title: 'Customers', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow two-column', label: '', labelClass: '', extralink: false,
        submenu: [
           {
                path: '/sample-pages/customers', title: 'Customers', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/clients', title: 'Clients', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/sample-pages/pricetemplate', title: 'Price Template', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/loyalty_scheme', title: 'Loyalty Scheme', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{	
                path: '/import_customers_from_excel', title: 'Import customers from excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '/import_clients_from_excel', title: 'Import clients from excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Print loyality scheme statements', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Print account statement', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
        ]
    },

    {
        path: '', title: 'Bookings', icon: 'mdi mdi-steering', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
          {
                path: '/booking', title: 'Bookings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/booking_diary', title: 'Booking diary', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/driver_allocation', title: 'Driver allocation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/print_bookings', title: 'Print bookings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/email_bookings', title: 'Email bookings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/print_driver_job_sheets', title: 'Print driver job sheets', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/email_driver_job_sheets', title: 'Email driver job sheets', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/export_bookings_to_excel', title: 'Export bookings to Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/import_booking_from_excel', title: 'Import booking from Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/export_booking_receipts_to_excel', title: 'Export booking receipts to Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/Export booking payment to Excel', title: 'Export booking payment to Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/export_booking_times_to_excel', title: 'Export booking times to Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/export_booking_day_summary_to_excel', title: 'Export booking day summary to Excel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/dispatched_booking_monitor', title: 'Dispatched booking monitor', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/dispatcher', title: 'Dispatcher', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			 {
                path: '/events', title: 'Events', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
        ]
    },
    {
        path: '/sample-pages/invoice', title: 'Invoices & Payslips', icon: 'mdi mdi-clipboard-text', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
           
        ]
    },
	{
        path: '', title: 'Reports', icon: 'mdi mdi-chart-scatterplot-hexbin', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           {
                path: '', title: 'Drivers & Vehicles', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Customers', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Partner', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Bookings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'PCO', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Invoices & Pay slips', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
			{
                path: '', title: 'Revenue', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
        ]
    },
	{
        path: '', title: 'Help', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           /* { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },*/
        ]
    }
     
];

