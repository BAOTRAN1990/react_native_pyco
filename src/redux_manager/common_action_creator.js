// Action types
export const START_LOADING = 'Start_Loading';
export const STOP_LOADING = 'Stop_Loading';

// Action Creators
export function startLoading(){
    return {
        type: START_LOADING
    }
}

export function stopLoading(){
    return {
        type: STOP_LOADING
    }
}