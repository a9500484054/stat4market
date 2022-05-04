document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.burger').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function() {

            let on = document.querySelector('.s4m-header__wrap')
            on.classList.toggle('s4m-header__menu')

            let btnClose = document.querySelector('.burger__elem')
            btnClose.classList.toggle('burger__elem--close')

        })
    })
})

