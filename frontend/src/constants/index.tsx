export const ENTREPRISE_HOME_PAGE = "https://ksu.edu.sa/"
export const TYPING_EFFECTS_VALUES = {
    strings: ["Inventory", "Workshops", "Items"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
}

export const DASHBOARD_NAV_ITEMS = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
        ),
        value: "items"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enable-background="new 0 0 64 64" className="size-10" fill="white">
                <g>
                    <path d="M4.691,55.946c0.32,0.053,0.646-0.049,0.875-0.279l6.393-6.393l2.766,2.766l-6.393,6.393   C8.104,58.663,8,58.989,8.054,59.309s0.261,0.593,0.554,0.733C9.918,60.669,11.384,61,12.848,61c2.635,0,5.11-1.024,6.968-2.882   c2.28-2.269,3.29-5.448,2.759-8.599l7.772-7.773c0.702,0.185,1.463,0.169,2.055-0.061c0.006-0.002,0.619-0.226,1.337-0.226   c0.648,0,1.157,0.181,1.514,0.537c0.987,0.987,0.317,2.844,0.315,2.85c-0.442,1.134-0.107,2.692,0.755,3.54L46.44,58.504   c1.508,1.521,3.508,2.403,5.67,2.486L52.48,61c2.29,0,4.431-0.886,6.025-2.492c1.604-1.599,2.49-3.738,2.492-6.022   c0.002-2.289-0.883-4.436-2.491-6.043L48.393,36.329c-0.831-0.845-2.446-1.188-3.537-0.764c-0.007,0.002-0.625,0.225-1.341,0.225   c-0.65,0-1.161-0.181-1.518-0.537c-0.986-0.986-0.318-2.833-0.315-2.839c0.244-0.625,0.262-1.375,0.071-2.073l7.768-7.767   c3.146,0.525,6.354-0.504,8.597-2.757c2.949-2.949,3.723-7.454,1.925-11.208c-0.141-0.293-0.414-0.5-0.733-0.554   C58.984,8,58.662,8.104,58.433,8.333l-6.392,6.392l-2.758-2.765l6.385-6.394C55.896,5.337,56,5.01,55.945,4.691   c-0.055-0.32-0.261-0.593-0.554-0.733C54.082,3.331,52.616,3,51.152,3c-2.635,0-5.11,1.024-6.969,2.882   c-2.278,2.27-3.288,5.448-2.758,8.599L28.659,27.246L9.737,8.323L9.252,4.924C9.199,4.548,8.938,4.236,8.578,4.116L5.381,3.051   c-0.358-0.12-0.755-0.026-1.023,0.242L3.293,4.357C3.025,4.625,2.932,5.021,3.051,5.38l1.065,3.197   c0.12,0.36,0.433,0.621,0.808,0.674l3.398,0.485L27.245,28.66L14.479,41.426c-0.54-0.09-1.088-0.136-1.636-0.136   c-2.631,0-5.104,1.028-6.96,2.893c-2.949,2.949-3.723,7.453-1.925,11.208C4.098,55.685,4.372,55.891,4.691,55.946z M5.819,7.359   L5.144,5.335l0.191-0.191l2.024,0.674l0.257,1.797L5.819,7.359z M43.515,37.79c1.083,0,1.954-0.319,2.058-0.358   c0.377-0.147,1.104,0.004,1.4,0.305l10.12,10.12c1.23,1.23,1.906,2.874,1.905,4.627c-0.002,1.75-0.678,3.385-1.908,4.611   C55.87,58.324,54.233,59,52.48,59l-0.331-0.009c-1.616-0.063-3.139-0.736-4.292-1.898L37.731,46.967   c-0.308-0.302-0.456-0.993-0.297-1.402c0.048-0.125,1.138-3.077-0.768-4.982c-0.734-0.735-1.747-1.123-2.928-1.123   c-1.081,0-1.95,0.319-2.053,0.358c-0.292,0.114-0.778,0.069-1.15-0.124c-0.105-0.052-0.188-0.11-0.261-0.184l-1.592-1.583   c-0.195-0.199-0.198-0.529-0.005-0.723l4.257-4.262c0.001-0.001,0.003-0.001,0.004-0.003s0.001-0.003,0.003-0.004l4.249-4.253   c0.131-0.129,0.286-0.148,0.367-0.148c0.079,0,0.23,0.019,0.354,0.142l1.6,1.6c0.072,0.072,0.13,0.155,0.189,0.272   c0.188,0.364,0.235,0.831,0.113,1.145c-0.047,0.125-1.139,3.067,0.768,4.973C41.317,37.402,42.331,37.79,43.515,37.79z    M43.217,15.517c0.243-0.243,0.344-0.593,0.269-0.928c-0.601-2.652,0.188-5.377,2.111-7.292C47.079,5.815,49.052,5,51.152,5   c0.674,0,1.348,0.088,1.997,0.258l-5.987,5.996c-0.39,0.39-0.39,1.022,0,1.413l4.17,4.18c0.188,0.188,0.442,0.294,0.707,0.294   c0.001,0,0.001,0,0.001,0c0.266,0,0.52-0.105,0.707-0.293l5.997-5.998c0.702,2.661-0.043,5.555-2.043,7.555   c-1.895,1.903-4.669,2.704-7.29,2.111c-0.336-0.076-0.686,0.025-0.928,0.268l-7.818,7.817l-1.338-1.337   c-0.938-0.937-2.583-0.946-3.544,0l-3.551,3.556l-2.158-2.159L43.217,15.517z M7.298,45.596c1.48-1.487,3.45-2.306,5.545-2.306   c0.586,0,1.174,0.065,1.746,0.195c0.335,0.078,0.686-0.024,0.928-0.268L28.66,30.074l2.159,2.159l-3.555,3.56   c-0.969,0.969-0.972,2.556,0.002,3.546l1.334,1.327l-7.816,7.817c-0.243,0.243-0.344,0.593-0.268,0.928   c0.6,2.652-0.188,5.377-2.112,7.292C16.921,58.185,14.949,59,12.848,59c-0.673,0-1.347-0.088-1.996-0.258l5.996-5.996   c0.391-0.391,0.391-1.023,0-1.414l-4.18-4.18c-0.391-0.391-1.023-0.391-1.414,0L5.255,53.15   C4.553,50.489,5.299,47.595,7.298,45.596z"/>
                    <path d="M52.302,53.718c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414   l-7.991-7.991c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L52.302,53.718z"/>
                </g>
            </svg>
        ),
        value: "workshops"
    }
]