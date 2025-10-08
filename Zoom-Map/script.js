const Map1 = document.getElementById("Map-1");
const Map2 = document.getElementById("Map-2");
const btnSubmitSeach = document.getElementById("btnSubmitSeach");
const zoomInput = document.getElementById("zoomInput");
const view = document.getElementById("view");

Map1.style.display = "none";
Map2.style.display = "none";

let turismo = [
    ["Lota, Chile", -37.0881, -73.1576],
    ["São Paulo, Brasil", -23.5505, -46.6333]
];

let maps = []; // Guarda os mapas criados

btnSubmitSeach.addEventListener("click", () => {
    // 1️⃣ Validação do zoom
    let zoomChoice = parseInt(zoomInput.value);

    if (isNaN(zoomChoice) || zoomChoice < 5) {
        view.style.display = "block";
        view.innerHTML = `Enter a number less than if 5 and 15 😱`;
        view.className = "text-danger fw-bold text-center p-2";
        Map1.style.display = "none";
        Map2.style.display = "none";
        return 0;
    }

    if (zoomChoice > 15) {
        view.style.display = "block";
        view.innerHTML = ` Enter a number less than or equal to 15 😶‍🌫️`;
        view.className = "text-danger fw-bold text-center p-2";
        Map1.style.display = "none";
        Map2.style.display = "none";
        return 0;
    }

    // 2️⃣ Se passou na validação, esconde o aviso
    view.style.display = "none";

    // 3️⃣ Mostra os mapas
    Map1.style.display = "block";
    Map2.style.display = "block";

    // 4️⃣ Criação dos mapas (apenas uma vez)
    if (maps.length === 0) {
        for (let i = 0; i < turismo.length; i++) {
            let map = new ol.Map({
                target: 'Map-' + (i + 1),
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([turismo[i][2], turismo[i][1]]),
                    zoom: zoomChoice
                })
            });
            maps.push(map);
        }
    } else {
        // Atualiza o zoom dos mapas existentes
        maps.forEach(map => {
            let viewMap = map.getView();
            viewMap.setZoom(zoomChoice);
            map.updateSize();
        });
    }
});
