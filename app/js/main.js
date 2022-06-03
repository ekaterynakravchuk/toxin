$(function() {
    
})

//   dropdown menu
document.querySelectorAll('.dropdownWrapp').forEach(function(dropdownWrapper) {
    const dropLink = dropdownWrapper.querySelector('.submenu');
    const dropList = dropdownWrapper.querySelector('.header__submenu');
    const dropItems = dropList.querySelectorAll('.header__submenu-link');

    // select list open
    dropLink.addEventListener('click', function () {
    dropList.classList.toggle('open');
    });
    // select lict close
    dropItems.forEach(function (dropItem) {
        dropItem.addEventListener('click', function () {
          dropList.classList.remove('open');
        });
    });
    // select list close outside
    document.addEventListener('click', function (e) {
      if (e.target != dropLink) {
        dropList.classList.remove('open');
      }
    });
})

// calendar
new AirDatepicker('#calendar-from', {
    selectedDates: [new Date()],
    minDate: [new Date()],
    autoClose: true
});

new AirDatepicker('#calendar-to', {
    selectedDates: [new Date()],
    minDate: [new Date()],
    autoClose: true
});

// counters

const counters = document.querySelectorAll('[data-counter]');

if(counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const btn = e.target;
            const counterItem = btn.closest('.top__item-counter');

            if(btn.closest('.top__item-btn')) {
                let value = parseInt(counterItem.querySelector('input').value);

                if(btn.classList.contains('more')) {
                    value++;
                } else {
                    --value;
                }
                if(value <= 0) {
                    value = 0;
                    counterItem.querySelector('.less').classList.add('disabled');
                } else {
                    counterItem.querySelector('.less').classList.remove('disabled');
                }

                counterItem.querySelector('input').value = value;
                document.querySelector('.top__select-clean').addEventListener('click', function() {
                    counterItem.querySelector('input').value = 0;
                })
            }
        });

    });
}