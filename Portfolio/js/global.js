function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();

/* Porfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio_filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    const showProjets = (elem) => {
        console.log(elem);
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }

            if (filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }

        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter)
            resetActiveLinks();
            elem.classList.add('active');
        });
    })
}

tabsFilters()

function showProjectDetails() {
    const links = document.querySelectorAll('.card_link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal_close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    });

}

showProjectDetails();

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {

        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();

/* test perso */

document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const darkModeBtn = document.getElementById('dark_mode_btn');

    function activerModeSombre() {
        // Changer les valeurs des variables CSS pour le mode sombre
        root.style.setProperty('--color-background', '#292A2C');
        root.style.setProperty('--color-item-background', '#34383A');
        root.style.setProperty('--color-text', '#F5f5f5');
        root.style.setProperty('--op-color-background', '#ffffff');
        root.style.setProperty('--op-color-text', '#ffffff');
    }

    function activerModeClair() {
        // Rétablir les valeurs des variables CSS pour le mode clair (valeurs initiales)
        root.style.setProperty('--color-background', '#f5f5f5');
        root.style.setProperty('--color-item-background', '#d4d4d4');
        root.style.setProperty('--color-text', '#333333');
        root.style.setProperty('--op-color-background', '#000');
        root.style.setProperty('--op-color-text', '#f5f5f5');
    }

    function swapColor() {
        if (darkModeBtn.textContent === 'Dark Mode') {
            darkModeBtn.textContent = 'Light Mode';
            activerModeSombre();
        } else {
            darkModeBtn.textContent = 'Dark Mode';
            activerModeClair();
        }
    }

    darkModeBtn.addEventListener('click', swapColor);
});



