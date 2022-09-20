fetch("https://api.omny.fm/orgs/4bb33704-615b-4054-aae9-ace500fd4197/programs/daeea5e9-9f88-4f9e-b527-adfa0088c647/clips").then((data) => {
    return data.json();
}).then((completedata1) => {
    let data1 = "";
    completedata1.Clips.map((values) => {
        if(values.Season == 1){
        data1 +=
            `<iframe src="${values.EmbedUrl}" width="100%" height="180" loading="lazy" allow="autoplay; clipboard-write" frameborder="0" title="${values.Title}"></iframe>`
        }
    });
    document.getElementById('season1').innerHTML = data1;
    let data2 = "";
    completedata1.Clips.map((values) => {
        if(values.Season == 2){
        data2 +=
            `<iframe src="${values.EmbedUrl}" width="100%" height="180" loading="lazy" allow="autoplay; clipboard-write" frameborder="0" title="${values.Title}"></iframe>`
        }
    });
    document.getElementById('season2').innerHTML = data2;
    
       let latest = ""

       latest =   `<h6 class="subtitle">${completedata1.Clips[0].Title}</h6>
                   <iframe src="${completedata1.Clips[0].EmbedUrl}" width="100%" height="180" loading="lazy" allow="autoplay; clipboard-write" frameborder="0" border-radius="100" title="${completedata1.Clips[0].Title}"></iframe>`
    
    document.getElementById('latest').innerHTML = latest;
}).catch((err) => {
    console.log(err);
})