

var cteatedJs = function (self) {
    var data_id = document.getElementById('section1');
    intro_text = data_id.querySelector('.intro-text');

    var data_search = document.querySelector('.search-container'),
        data_search_id = data_search.querySelector('#search');

    data_search_id.addEventListener('input', (event) => {

        var data_target = event.target.value;
        const regex = new RegExp(data_target, 'gi');

        let text = intro_text.innerHTML;
            text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

        const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
        intro_text.innerHTML = newText;

    });





    data_ul = data_id.querySelectorAll('.details-list');

    data_ul.forEach(self => {

        var data_add = self.firstElementChild;


    });

}

cteatedJs(); 