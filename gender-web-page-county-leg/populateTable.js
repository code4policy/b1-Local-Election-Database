document.addEventListener("DOMContentLoaded", function () {

const csvData = `fips,geoname,num_M,num_F,f_winner,m_winner,num_seats,percent_women,female_representation,f_representation_score
01083,Limestone,10,0,0,6,6,0.500765357289896,0.0,0
02020,Anchorage,8,1,0,1,1,0.490104963359918,0.0,0
02090,Fairbanks North Star Borough,22,7,1,10,11,0.460826469638243,0.19727402156489876,1
02122,Kenai Peninsula Borough,22,4,0,11,11,0.478653530377668,0.0,0
02170,Matanuska-Susitna Borough,20,7,3,9,12,0.479562300107242,0.5213087015891237,3
05031,Craighead,4,0,0,2,2,0.511984722157529,0.0,0
05045,Faulkner,2,0,0,1,1,0.511478353717725,0.0,0
05051,Garland,2,0,0,1,1,0.520115671452488,0.0,0
05069,Jefferson,4,0,0,2,2,0.505181721081955,0.0,0
05119,Pulaski,10,1,0,6,6,0.521855524764166,0.0,0
05125,Saline,4,0,0,2,2,0.509517229828748,0.0,0
05131,Saline,4,1,0,3,3,0.511384031789076,0.0,0
05143,Washington,2,2,2,0,2,0.500983688422612,1.996072972253012,10
05145,White,11,0,0,5,5,0.511515705543282,0.0,0
08031,Denver,4,1,0,2,2,0.499258761635883,0.0,0
10003,New castle,15,0,0,9,9,0.515990758138322,0.0,0
12086,Miami-dade,23,6,1,7,8,0.51417152078144,0.24310953630808738,1
13021,bibb,10,0,0,5,5,0.530580939947781,0.0,0
13045,carroll,4,0,0,2,2,0.513376513658124,0.0,0
13059,clarke,7,7,5,2,7,0.524117106264266,1.3628361023682427,7
13063,clayton,1,0,0,1,1,0.531787626349907,0.0,0
13089,dekalb,8,0,0,7,7,0.527202554839502,0.0,0
13153,houston,2,0,0,2,2,0.515097031405734,0.0,0
13223,paulding,4,0,0,2,2,0.512260284686376,0.0,0
15001,hawaii,29,4,0,9,9,0.503647366125369,0.0,0
15003,honolulu,30,5,0,11,11,0.496288157949516,0.0,0
15007,kauai,14,7,3,6,9,0.504953392133094,0.6601269315673285,3
15009,maui,13,5,3,5,8,0.502147862078938,0.7467919876178816,4
17019,champaign,1,1,1,0,1,0.501591067158278,1.9936559190844765,10
17031,cook,13,6,4,6,10,0.514656496626285,0.777217430698165,4
17043,dupage,8,1,0,5,5,0.508956364497449,0.0,0
17089,kane,5,5,3,2,5,0.502115263015266,1.194944755108466,6
17197,will,15,2,1,8,9,0.503810304432661,0.2205415612454234,1
17201,winnebago,6,1,1,3,4,0.511833831310411,0.48843977225956936,2
18005,bartholomew,7,0,0,5,5,0.500854742304288,0.0,0
18081,johnson,4,0,0,4,4,0.508880012490567,0.0,0
18157,tippecanoe,12,2,2,7,9,0.489446784962908,0.45402734076404855,2
20091,johnson,3,7,2,3,5,0.509560342583169,0.7849904448455252,4
20209,wyandotte,10,4,2,5,7,0.503769842473356,0.567152420858533,3
21015,boone,3,0,0,3,3,0.503493349640728,0.0,0
21037,campbell,4,1,0,3,3,0.511021849861621,0.0,0
21047,christian,2,0,0,2,2,0.468367546979584,0.0,0
21067,fayette,5,4,2,3,5,0.509574205944461,0.7849690885719526,4
21111,jefferson,11,3,3,5,8,0.516625207350873,0.7258646977814105,4
21117,kenton,2,0,0,2,2,0.505408407175797,0.0,0
21227,warren ,3,0,0,2,2,0.510470105400616,0.0,0
22005,ascension parish,16,2,0,8,8,0.505921341195965,0.0,0
22045,iberia parish,17,2,0,9,9,0.511038157107683,0.0,0
22051,jefferson,16,1,1,8,9,0.515488099344602,0.21554544373066836,1
22057,lafourche parish,11,5,3,5,8,0.508531414359685,0.7374175703032615,4
22063,livingston parish,13,0,0,8,8,0.508925486582978,0.0,0
22089,st. charles parish,12,1,0,6,6,0.49963049286567,0.0,0
22097,st. landry parish,9,0,0,5,5,0.517409705189246,0.0,0
22099,st. martin parish,10,0,0,9,9,0.5079840690836,0.0,0
22103,st. tammany,6,6,2,4,6,0.514687150947463,0.6476426169173175,3
22105,tangipahoa parish,16,0,0,9,9,0.515822712919421,0.0,0
22109,terrebonne parish,18,1,0,9,9,0.506006032805612,0.0,0
24003,anne arundel,16,3,2,7,9,0.505280294079034,0.4397998988408265,2
24005,baltimore,22,7,4,7,11,0.525981319246683,0.691348438300372,3
24015,cecil,3,2,2,1,3,0.502476792261487,1.3267611100329901,7
24017,charles,8,1,1,3,4,0.518409564191986,0.48224418928238727,2
24021,frederick,2,3,2,0,2,0.507155300649903,1.9717826052858614,10
24025,harford,14,4,2,7,9,0.510157718200633,0.4355951390993705,2
24027,howard,12,2,0,8,8,0.510871712847533,0.0,0
24031,montgomery,18,1,0,9,9,0.516901286977854,0.0,0
24033,prince george's,9,2,1,7,8,0.518593108609286,0.24103675487553855,1
24045,wicomico,11,0,0,5,5,0.52524405348209,0.0,0
26017,bay,8,0,0,5,5,0.508770076077768,0.0,0
26099,macomb,6,1,0,3,3,0.513100278631546,0.0,0
26125,oakland,15,4,1,9,10,0.510930947944637,0.19572116428311506,1
26163,wayne,11,0,0,5,5,0.518477504397374,0.0,0
29077,greene,14,1,0,6,6,0.513576940598297,0.0,0
29095,jackson,16,4,4,5,9,0.516471899525435,0.8605394501672333,4
29097,jasper,3,0,0,2,2,0.511649432955304,0.0,0
29099,jefferson,6,0,0,3,3,0.503632491035986,0.0,0
29183,st. charles,14,1,0,8,8,0.508689035988739,0.0,0
29189,st. louis,32,3,0,12,12,0.525568275857918,0.0,0
29510,st. louis city,4,1,1,0,1,0.515939047421262,1.9382134478833202,10
34001,atlantic,15,1,0,8,8,0.516014355235715,0.0,0
34003,bergen,14,3,1,8,9,0.515083997033502,0.2157145470467494,1
34013,essex,18,2,0,8,8,0.519083384041317,0.0,0
34017,hudon,19,1,0,12,12,0.502835626210738,0.0,0
34021,mercer,12,4,0,8,8,0.511184435831508,0.0,0
36001,albany,16,0,0,8,8,0.515832269161606,0.0,0
36007,broome,12,4,4,4,8,0.507852454603806,0.9845379213339985,5
36013,chautauqua,18,0,0,9,9,0.506949632673391,0.0,0
36015,chemung,2,0,0,1,1,0.504611579009364,0.0,0
36027,dutchess,13,1,0,7,7,0.502777834514594,0.0,0
36029,erie,17,1,0,8,8,0.516155348042921,0.0,0
36055,monroe,9,7,4,5,9,0.517419327065237,0.8589637479629906,4
36059,nassau,23,4,1,8,9,0.513388410987321,0.2164269951038205,1
36065,oneida,11,0,0,6,6,0.501363286498898,0.0,0
36067,onondaga,9,3,3,4,7,0.517605299089165,0.8279888736177736,4
36071,orange,10,3,1,6,7,0.498919978425878,0.2863327768670751,1
36079,putnam,16,5,3,6,9,0.501746181177685,0.6643465278618412,3
36083,rensselaer,6,9,4,5,9,0.504676948204919,0.8806513672266683,4
36087,rockland,18,3,0,8,8,0.50954620833359,0.0,0
36103,suffolk,15,2,0,8,8,0.507742790288928,0.0,0
36111,ulster,5,2,1,3,4,0.504726723197045,0.49531754216707113,2
36119,westchester,18,3,0,9,9,0.515766495680624,0.0,0
39035,cuyahoga,10,0,0,3,3,0.52334320145641,0.0,0
39153,summit,11,2,1,6,7,0.514911311685577,0.27744028848287655,1
42003,allegheny,10,0,0,6,6,0.516803847614558,0.0,0
42049,erie,7,5,4,3,7,0.506133255427539,1.129008152103889,6
42077,lehigh,13,4,3,6,9,0.510836812289756,0.6525241042030866,3
42095,northampton,12,0,0,7,7,0.50812888652583,0.0,0
47009,blount,7,1,1,4,5,0.514758287345971,0.3885318700378286,2
47065,hamilton,17,0,0,10,10,0.51732383166306,0.0,0
47125,montgomery,9,2,1,3,4,0.500704366070536,0.49929662479672005,2
47157,shelby,25,2,0,9,9,0.524939821054408,0.0,0
48061,cameron,7,0,0,4,4,0.513956543804812,0.0,0
48085,collin,4,1,0,3,3,0.508046904598363,0.0,0
48121,denton,1,3,2,1,3,0.508151619890096,1.3119443893750737,7
48141,el paso ,4,4,4,2,6,0.50761426784138,1.313333191956274,7
48157,fort bend,5,0,0,2,2,0.50886471542761,0.0,0
48427,starr,6,2,1,4,5,0.513358719061144,0.389591123271014,2
48439,tarrant,8,0,0,6,6,0.510818774789367,0.0,0
49035,salt lake,10,5,3,4,7,0.498032895630558,0.8605283553184082,4
53033,king,19,2,0,10,10,0.498678662100968,0.0,0
53053,pierce,14,3,2,6,8,0.501173870854822,0.4988288786356521,2
53061,snohomish,16,0,0,9,9,0.498510280317673,0.0,0
53073,whatcom,12,3,2,7,9,0.506070527712491,0.4391131473842144,2
55025,dane,6,6,3,5,8,0.502977178694145,0.7455606653438911,4
55079,milwaukee,19,1,0,11,11,0.515925763173,0.0,0
55087,outagamie,6,0,0,4,4,0.500786214324179,0.0,0
55133,waukesha,9,1,0,7,7,0.508154067045384,0.0,0
`;

    function parseCSV(data) {
        const lines = data.split("\n");
        const result = [];
        const headers = lines[0].split(",").map(header => header.trim());

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i]) continue;
            const obj = {};
            const currentline = lines[i].split(",").map(cell => cell.trim());

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        return result;
    }

    function createTable(filteredData) {
        const table = document.getElementById('countiesTable');
        table.innerHTML = "";

        // Add table headers
        let headerRow = table.insertRow();
        let headerCell1 = headerRow.insertCell(0);
        let headerCell2 = headerRow.insertCell(1);
        let headerCell3 = headerRow.insertCell(2);
        let headerCell4 = headerRow.insertCell(3);
        let headerCell5 = headerRow.insertCell(4);
        let headerCell6 = headerRow.insertCell(5);

        headerCell1.innerHTML = '<b>County Name</b>';
        headerCell2.innerHTML = '<b>Female Representation</b>';
        headerCell3.innerHTML = '<b>Male Candidates</b>';
        headerCell4.innerHTML = '<b>Female Candidates</b>';
        headerCell5.innerHTML = '<b>Female Winners</b>';
        headerCell6.innerHTML = '<b>Male Winners</b>';

        filteredData.forEach(item => {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);

            // Capitalize geoname
            cell1.innerHTML = item.geoname.toUpperCase();
            cell2.innerHTML = (parseFloat(item.female_representation) * 100).toFixed(2) + '%';
            cell3.innerHTML = item.num_M;
            cell4.innerHTML = item.num_F;
            cell5.innerHTML = item.f_winner;
            cell6.innerHTML = item.m_winner;
        });
    }


    function populateDropdown(data) {
        const dropdown = document.getElementById('geonameDropdown');
        dropdown.innerHTML = "";

        const options = [
            { label: "No representation", min: 0, max: 0.0 },
            { label: "Some representation", min: 0.1, max: 0.4 },
            { label: "Representative", min: 0.4, max: 0.6 },
            { label: "Over representation", min: 0.6, max: 1 }
        ];

        options.forEach(option => {
            const filteredData = data.filter(item => {
                const percentage = parseFloat(item.female_representation);
                return percentage >= option.min && percentage <= option.max;
            });

            console.log(`Filtered Data for ${option.label}:`, filteredData); // Logging

            if (filteredData.length > 0) {
                let optgroup = document.createElement('optgroup');
                optgroup.label = option.label;

                filteredData.forEach(item => {
                    let optionElement = document.createElement('option');
                    optionElement.value = item.geoname;
                    optionElement.textContent = item.geoname.toUpperCase(); // Capitalize geoname
                    optgroup.appendChild(optionElement);
                });

                dropdown.appendChild(optgroup);
            } else {
                console.log(`No data for ${option.label}`); // Logging
            }
        });
    }

    // Parse CSV data
    const parsedData = parseCSV(csvData);

    // Populate dropdown
    populateDropdown(parsedData);

    // Event listener for dropdown change
    document.getElementById('geonameDropdown').addEventListener('change', function () {
        const selectedGeoname = this.value;
        const selectedRow = parsedData.find(item => item.geoname === selectedGeoname);
        createTable([selectedRow]);
    });
});


