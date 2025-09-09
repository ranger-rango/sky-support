import Nav from "../components/nav";
import MainBody from "../components/main-body";
import NavigationLink from "../components/nav-link";
import SideNavComponent from "../components/side-nav-comp";
import RenderTable from "../components/table-renderer";

export default function IndexPage()
{
    const columnHeaders = [
        {
            "id" : 'user_name',
            "columnName" : "UserName",
            "hide" : false,
            render : false
        },
        {
            "id" : 'first_name',
            "columnName" : "FirstName",
            "hide" : false,
            render : false
        },
        {
            "id" : 'last_name',
            "columnName" : "LastName",
            "hide" : false,
            render : false
        },
        {
            "id" : 'full_name',
            "columnName" : "FullName",
            "hide" : false,
            render : false
        },
        {
            "id" : 'gender',
            "columnName" : "Gender",
            "hide" : false,
            render : false
        },
        {
            "id" : 'age',
            "columnName" : "Age",
            "hide" : false,
            render : false
        }
    ];

    const data = [
        {
            user_name: "jdoe92",
            first_name: "John",
            last_name: "Doe",
            middle_name: "Michael",
            gender: "Male",
            age: 32,
            email: "jdoe92@example.com",
            phone: "+1-202-555-0183",
            country: "USA",
            city: "New York",
            state: "NY",
            zip_code: "10001",
            occupation: "Software Engineer",
            company: "TechCorp",
            status: "Active"
        },
        {
            user_name: "asmith87",
            first_name: "Alice",
            last_name: "Smith",
            middle_name: "Rose",
            gender: "Female",
            age: 28,
            email: "asmith87@example.com",
            phone: "+44-7700-900234",
            country: "UK",
            city: "London",
            state: "England",
            zip_code: "EC1A",
            occupation: "Data Analyst",
            company: "DataWorks",
            status: "Active"
        },
        {
            user_name: "kpatel01",
            first_name: "Kiran",
            last_name: "Patel",
            middle_name: "Raj",
            gender: "Male",
            age: 35,
            email: "kpatel01@example.com",
            phone: "+91-9876543210",
            country: "India",
            city: "Mumbai",
            state: "Maharashtra",
            zip_code: "400001",
            occupation: "Project Manager",
            company: "Infoserve",
            status: "Inactive"
        },
        {
            user_name: "lwang23",
            first_name: "Li",
            last_name: "Wang",
            middle_name: "Hua",
            gender: "Female",
            age: 41,
            email: "lwang23@example.com",
            phone: "+86-138-0011-2233",
            country: "China",
            city: "Shanghai",
            state: "Shanghai",
            zip_code: "200000",
            occupation: "Professor",
            company: "Shanghai Uni",
            status: "Active"
        },
        {
            user_name: "omar_salem",
            first_name: "Omar",
            last_name: "Salem",
            middle_name: "Hassan",
            gender: "Male",
            age: 29,
            email: "omar.salem@example.com",
            phone: "+20-100-555-7890",
            country: "Egypt",
            city: "Cairo",
            state: "Cairo",
            zip_code: "11511",
            occupation: "Civil Engineer",
            company: "BuildRight",
            status: "Active"
        },
        {
            user_name: "mgarcia55",
            first_name: "Maria",
            last_name: "Garcia",
            middle_name: "Isabel",
            gender: "Female",
            age: 26,
            email: "mgarcia55@example.com",
            phone: "+34-612-345-678",
            country: "Spain",
            city: "Madrid",
            state: "Madrid",
            zip_code: "28001",
            occupation: "UX Designer",
            company: "DesignHub",
            status: "Inactive"
        },
        {
            user_name: "tnguyen88",
            first_name: "Thao",
            last_name: "Nguyen",
            middle_name: "Lan",
            gender: "Female",
            age: 33,
            email: "tnguyen88@example.com",
            phone: "+84-901-234-567",
            country: "Vietnam",
            city: "Hanoi",
            state: "Hanoi",
            zip_code: "100000",
            occupation: "HR Manager",
            company: "PeopleFirst",
            status: "Active"
        },
        {
            user_name: "bjackson77",
            first_name: "Brian",
            last_name: "Jackson",
            middle_name: "Lee",
            gender: "Male",
            age: 45,
            email: "bjackson77@example.com",
            phone: "+1-415-555-3344",
            country: "USA",
            city: "San Francisco",
            state: "CA",
            zip_code: "94105",
            occupation: "CTO",
            company: "InnovaTech",
            status: "Active"
        },
        {
            user_name: "ayamada66",
            first_name: "Aiko",
            last_name: "Yamada",
            middle_name: "Sakura",
            gender: "Female",
            age: 30,
            email: "ayamada66@example.com",
            phone: "+81-80-1234-5678",
            country: "Japan",
            city: "Tokyo",
            state: "Tokyo",
            zip_code: "100-0001",
            occupation: "Marketing Specialist",
            company: "Shibuya Media",
            status: "Inactive"
        },
        {
            user_name: "mross19",
            first_name: "Michael",
            last_name: "Ross",
            middle_name: "James",
            gender: "Male",
            age: 38,
            email: "mross19@example.com",
            phone: "+1-646-555-7890",
            country: "USA",
            city: "Chicago",
            state: "IL",
            zip_code: "60601",
            occupation: "Financial Advisor",
            company: "MoneyWise",
            status: "Active"
        },
        {
            user_name: "cfatima20",
            first_name: "Fatima",
            last_name: "Chowdhury",
            middle_name: "Nadia",
            gender: "Female",
            age: 27,
            email: "cfatima20@example.com",
            phone: "+880-171-234-5678",
            country: "Bangladesh",
            city: "Dhaka",
            state: "Dhaka",
            zip_code: "1212",
            occupation: "Teacher",
            company: "Dhaka High School",
            status: "Active"
        },
        {
            user_name: "kwilliams02",
            first_name: "Kevin",
            last_name: "Williams",
            middle_name: "Joseph",
            gender: "Male",
            age: 36,
            email: "kwilliams02@example.com",
            phone: "+1-305-555-6677",
            country: "USA",
            city: "Miami",
            state: "FL",
            zip_code: "33101",
            occupation: "Lawyer",
            company: "Justice LLP",
            status: "Inactive"
        },
        {
            user_name: "slucas45",
            first_name: "Sophie",
            last_name: "Lucas",
            middle_name: "Marie",
            gender: "Female",
            age: 24,
            email: "slucas45@example.com",
            phone: "+33-6-12-34-56-78",
            country: "France",
            city: "Paris",
            state: "Île-de-France",
            zip_code: "75001",
            occupation: "Photographer",
            company: "ArtLens",
            status: "Active"
        },
        {
            user_name: "rfernandez98",
            first_name: "Rafael",
            last_name: "Fernandez",
            middle_name: "Diego",
            gender: "Male",
            age: 31,
            email: "rfernandez98@example.com",
            phone: "+52-55-1234-5678",
            country: "Mexico",
            city: "Mexico City",
            state: "CDMX",
            zip_code: "01000",
            occupation: "Journalist",
            company: "El Diario",
            status: "Inactive"
        },
        {
            user_name: "zkhumalo33",
            first_name: "Zanele",
            last_name: "Khumalo",
            middle_name: "Nokuthula",
            gender: "Female",
            age: 40,
            email: "zkhumalo33@example.com",
            phone: "+27-82-123-4567",
            country: "South Africa",
            city: "Johannesburg",
            state: "Gauteng",
            zip_code: "2001",
            occupation: "Doctor",
            company: "HealthFirst",
            status: "Active"
        }
    ];

    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")
    const ticketColHeaders = [
        {
            id : "main_category",
            columnName : "Main Category",
            hide : false,
            render : false
        },
        {
            id : "sub_category",
            columnName : "Sub Category",
            hide : false,
            render : false
        },
        {
            id : "problem_issue",
            columnName : "Problem/Issue",
            hide : false,
            render : false
        },
        {
            id : "description",
            columnName : "description",
            hide : false,
            render : false
        }
    ]

    return (
        <>
        <Nav navTitle="Help Desk - Sky World Limited" party="VENDOR" className="nav-vendor" htmlEl={
            <select name="sacco-select" id="sacco-select">
                <option value="">Select Sacco</option>
                <option value="apstar-sacco">Apstar SACCO Limited</option>
            </select>
        } />

        <MainBody page="tickets-display" htmlEl={
            <>
                <div className="side-nav-header">
                    <h3>
                        All Tickets
                    </h3>
                </div>

                <aside className="side-nav-nav">
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#1098AD"/></svg>} label="All" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#FD7E14"/></svg>} label="Open" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#1C7ED6"/></svg>} label="In Progess" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#37B24D"/></svg>} label="Resolved" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#0CA678"/></svg>} label="Closed" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#F03E3E"/></svg>} label="Dropped" tickCount="0" />
                    <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#5C5F66"/></svg>} label="On Hold" tickCount="0" />
                </aside>

                <div className="main-header">
                    <h3>
                        All Tickets
                    </h3>
                    <div>
                        <NavigationLink href="/raise-ticket" label="Add Ticket" className="create-ticket-btn" />
                    </div>
                </div>

                <section className="main-body">
                    {/* <RenderTable colHeaders={columnHeaders} tableData={data} /> */}
                    <RenderTable colHeaders={ticketColHeaders} tableData={ticketData} />
                </section>
            </>
        } />
        </>
    );
}