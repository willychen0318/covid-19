fetch('https://api.covid19api.com/summary')
    .then((apidata) => {
        return apidata.json();
        // console.log(apidata);
    })

    .then((actualdata) => {

            console.log(actualdata);
            //confirm
       


            
            //global data 

            const globco = actualdata.Global.TotalConfirmed;
            document.getElementById('globco').innerHTML = globco;

            //global recover
            const globro = actualdata.Global.TotalRecovered;
            document.getElementById('globro').innerHTML = globro;
            //global deaths

            const globdo = actualdata.Global.TotalDeaths;
            document.getElementById('globdo').innerHTML = globdo;
        }

    )
    .catch((error) => {
        console.log(`the error: ${error}`);
    });