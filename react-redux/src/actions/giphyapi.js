export const LOAD_GIFS = 'LOAD_GIFS_REQUEST';

export function loadGifsRequest() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOAD_GIFS,
      });
    }, 1000);
  };
}
