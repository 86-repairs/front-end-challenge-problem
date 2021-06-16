# 86 Repairs - Front End Challenge Problem

## Specification

* ✅ Create a new component that displays equipment from our predefined data source
* ✅ Add a link to the new component as the fifth element in the list on [the main page](src/app/home/home.component.html)
* ✅ Retrieve the equipment inventory via an HTTP GET request through an `HttpClient` instance to `${environment.apiUrl}/equipment`
    * Calls to this endpoint are intercepted by the [BackendInterceptor](src/app/backend-interceptor/BackendInterceptor.ts) class
        * The response is the `Array<object>` defined in [EquipmentData.ts](src/app/backend-interceptor/EquipmentData.ts)
        * There is a 20% chance that the request **will** throw an error with a 500 HTTP status code
            ✅ NOTE: Error checking!
* 🟡 Conditionally display each piece of equipment based on the following characteristics:
    * ✅ If `equipment_type` or `manufacturer` are missing, apply a yellow background to the piece of equipment consistent with [the design provided](design_reference/equipment_expanded_with_warnings.png)
    * ❌ If missing photos, display “NO PHOTOS” consistent with [the design provided](design_reference/equipment_expanded_with_warnings.png)
    * ✅ Do not display equipment if `active` is `false`
* ❌ An equipment card should be [collapsed by default](design_reference/equipment_list_collapsed.png) and [expand on click to show more details](design_reference/equipment_expanded.png). See [designs provided](design_reference/).
* ❌ Bonus:
    * ❌ Provide filters based on the value or status of one or more fields

## Rules of engagement

* Fork the repository
* Spend one hour fulfilling the spec above
* Commit and push your work as-is
* Email us a link to your repository 

## Installation

* Clone the repository
* Navigate to the project root and execute `npm install`

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
