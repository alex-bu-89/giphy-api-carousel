import config from '../../config/config';

export const LOAD_GIFS_REQUEST = 'LOAD_GIFS_REQUEST';

export function loadGifsRequest() {
  return (dispatch) => {
    // fetch(config.giphyApi.host)
    //   .then(response => response.json())
    //   .then((gifs) => {
    //     console.log('------>', JSON.stringify(gifs));
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });

    /*eslint-disable */
    const result = {"data":[{"type":"gif","id":"1r8SMj9uswgjFHFNmx","slug":"ufc-conor-mcgregor-the-notorious-1r8SMj9uswgjFHFNmx","url":"https://giphy.com/gifs/ufc-conor-mcgregor-the-notorious-1r8SMj9uswgjFHFNmx","bitly_gif_url":"https://gph.is/2Dft8A4","bitly_url":"https://gph.is/2Dft8A4","embed_url":"https://giphy.com/embed/1r8SMj9uswgjFHFNmx","username":"ufc","source":"","rating":"g","content_url":"","source_tld":"","source_post_url":"","is_sticker":0,"import_datetime":"2018-09-20 22:07:32","trending_datetime":"2018-09-20 22:19:15","user":{"avatar_url":"https://media4.giphy.com/channel_assets/ufc/ejy3O7Yzea89.png","banner_url":"https://media4.giphy.com/headers/ufc/lbvixwADb5xs.jpg","banner_image":"https://media4.giphy.com/headers/ufc/lbvixwADb5xs.jpg","profile_url":"https://giphy.com/ufc/","username":"ufc","display_name":"UFC","is_verified":true},"images":{"fixed_height_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"45432"},"original_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"72519"},"fixed_width":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"716779","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"96712","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"271750"},"fixed_height_small_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"180","height":"100","size":"14005"},"fixed_height_downsampled":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"285531","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"94776"},"preview":{"width":"307","height":"170","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-preview.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"35559"},"fixed_height_small":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"180","height":"100","size":"451451","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"81672","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"228104"},"downsized_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-downsized_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"384","height":"212","size":"47838"},"downsized":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-downsized.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"384","height":"212","size":"1797248"},"downsized_large":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2807031"},"fixed_width_small_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"55","size":"5663"},"preview_webp":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-preview.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"166","height":"92","size":"48770"},"fixed_width_still":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"17040"},"fixed_width_small":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"55","size":"147274","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"27319","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/100w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"94058"},"downsized_small":{"width":"315","height":"174","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-downsized-small.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"99293"},"fixed_width_downsampled":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"99118","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200w_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"37962"},"downsized_medium":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2807031"},"original":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2807031","frames":"43","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"461602","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"1027092","hash":"440f08438291e573514c87ee28521107"},"fixed_height":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"2039861","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"272352","webp":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/200.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"672760"},"looping":{"mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-loop.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"2194224"},"original_mp4":{"width":"481","height":"266","mp4":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"461602"},"preview_gif":{"url":"https://media0.giphy.com/media/1r8SMj9uswgjFHFNmx/giphy-preview.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"128","height":"71","size":"47724"},"480w_still":{"url":"https://media3.giphy.com/media/1r8SMj9uswgjFHFNmx/480w_s.jpg?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266"}},"title":"we are ready conor mcgregor GIF by UFC","_score":0},{"type":"gif","id":"AiSS0Ct3WYu1flqN6p","slug":"ufc-ufc229-uff-229-press-conference-AiSS0Ct3WYu1flqN6p","url":"https://giphy.com/gifs/ufc-ufc229-uff-229-press-conference-AiSS0Ct3WYu1flqN6p","bitly_gif_url":"https://gph.is/2pqBMlP","bitly_url":"https://gph.is/2pqBMlP","embed_url":"https://giphy.com/embed/AiSS0Ct3WYu1flqN6p","username":"ufc","source":"","rating":"g","content_url":"","source_tld":"","source_post_url":"","is_sticker":0,"import_datetime":"2018-09-20 22:03:12","trending_datetime":"2018-09-20 22:03:40","user":{"avatar_url":"https://media4.giphy.com/channel_assets/ufc/ejy3O7Yzea89.png","banner_url":"https://media4.giphy.com/headers/ufc/lbvixwADb5xs.jpg","banner_image":"https://media4.giphy.com/headers/ufc/lbvixwADb5xs.jpg","profile_url":"https://giphy.com/ufc/","username":"ufc","display_name":"UFC","is_verified":true},"images":{"fixed_height_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"38649"},"original_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"60568"},"fixed_width":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"688321","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"97964","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"232256"},"fixed_height_small_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"180","height":"100","size":"12278"},"fixed_height_downsampled":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"236038","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"76146"},"preview":{"width":"333","height":"184","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-preview.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"34105"},"fixed_height_small":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"180","height":"100","size":"425713","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"83595","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"196648"},"downsized_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-downsized_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"384","height":"212","size":"41039"},"downsized":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-downsized.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"384","height":"212","size":"1600053"},"downsized_large":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2472634"},"fixed_width_small_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"55","size":"5217"},"preview_webp":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-preview.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"191","height":"106","size":"49470"},"fixed_width_still":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"15082"},"fixed_width_small":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"55","size":"145095","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"31634","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/100w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"87426"},"downsized_small":{"width":"325","height":"180","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-downsized-small.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"102031"},"fixed_width_downsampled":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"110","size":"85950","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200w_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"30810"},"downsized_medium":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2472634"},"original":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266","size":"2472634","frames":"47","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"428567","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"826086","hash":"d7e36ec38e34c9678493904001dffc3c"},"fixed_height":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"360","height":"200","size":"1890409","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"258567","webp":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/200.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"555194"},"looping":{"mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-loop.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"1869546"},"original_mp4":{"width":"481","height":"266","mp4":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"428567"},"preview_gif":{"url":"https://media0.giphy.com/media/AiSS0Ct3WYu1flqN6p/giphy-preview.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"132","height":"73","size":"49450"},"480w_still":{"url":"https://media4.giphy.com/media/AiSS0Ct3WYu1flqN6p/480w_s.jpg?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"266"}},"title":"conor mcgregor uff 229 press conference GIF by UFC","_score":0},{"type":"gif","id":"5eFkI3L0xn5BkN7g2Z","slug":"cooking-mushroom-mushroommovie-5eFkI3L0xn5BkN7g2Z","url":"https://giphy.com/gifs/cooking-mushroom-mushroommovie-5eFkI3L0xn5BkN7g2Z","bitly_gif_url":"https://gph.is/2CxVuFz","bitly_url":"https://gph.is/2CxVuFz","embed_url":"https://giphy.com/embed/5eFkI3L0xn5BkN7g2Z","username":"mushroommovie","source":"","rating":"g","content_url":"","source_tld":"","source_post_url":"","is_sticker":0,"import_datetime":"2018-09-09 16:11:57","trending_datetime":"2018-09-20 20:15:37","user":{"avatar_url":"https://media1.giphy.com/avatars/mushroommovie/2X645FvqGYhy.gif","banner_url":"","profile_url":"https://giphy.com/mushroommovie/","username":"mushroommovie","display_name":"mushroommovie","is_verified":true},"images":{"fixed_height_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"5033"},"original_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"10161"},"fixed_width":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"367606","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"140856","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"350278"},"fixed_height_small_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"100","size":"2553"},"fixed_height_downsampled":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"22734","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"20342"},"preview":{"width":"368","height":"368","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-preview.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"37623"},"fixed_height_small":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"100","size":"140725","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"64878","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"152294"},"downsized_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-downsized_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"11224"},"downsized":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-downsized.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"454610"},"downsized_large":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"894987"},"fixed_width_small_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"100","size":"2553"},"preview_webp":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-preview.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"287","height":"287","size":"49546"},"fixed_width_still":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w_s.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"5033"},"fixed_width_small":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100w.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"100","height":"100","size":"140725","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100w.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"48269","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/100w.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"152294"},"downsized_small":{"width":"324","height":"324","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-downsized-small.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"133166"},"fixed_width_downsampled":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w_d.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"22734","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200w_d.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"20342"},"downsized_medium":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"894987"},"original":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480","size":"894987","frames":"119","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"434443","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"755538","hash":"e5d1607572c2936a69b694402859d768"},"fixed_height":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"200","height":"200","size":"367606","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"140856","webp":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/200.webp?cid=e1bb72ff5ba4c4457472324845b87ae1","webp_size":"350278"},"looping":{"mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-loop.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"1369061"},"original_mp4":{"width":"480","height":"480","mp4":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy.mp4?cid=e1bb72ff5ba4c4457472324845b87ae1","mp4_size":"434443"},"preview_gif":{"url":"https://media1.giphy.com/media/5eFkI3L0xn5BkN7g2Z/giphy-preview.gif?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"282","height":"282","size":"49008"},"480w_still":{"url":"https://media3.giphy.com/media/5eFkI3L0xn5BkN7g2Z/480w_s.jpg?cid=e1bb72ff5ba4c4457472324845b87ae1","width":"480","height":"480"}},"title":"fire cooking GIF by mushroommovie","_score":0}],"pagination":{"total_count":98564,"count":3,"offset":0},"meta":{"status":200,"msg":"OK","response_id":"5ba4c4457472324845b87ae1"}}
    /*eslint-enable eslint-disable-line*/

    dispatch({
      type: LOAD_GIFS_REQUEST,
      data: result.data,
    });
  };
}
