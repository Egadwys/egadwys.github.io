import { util } from './util.js';
import { guest } from './guest.js';
import { audio } from './audio.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    audio.init();
    pagination.init();

    guest.init();
    progress.init();
    window.AOS.init();

    window.util = util;
    window.guest = guest;
    window.audio = audio;
    window.pagination = pagination;
});
