const current = document.querySelectorAll('.current')

                    current.forEach(current => {
                      current.addEventListener('click', () => {
                        removeActiveClasses()
                        current.classList.add('active')
                      })
                    })

                    function removeActiveClasses() {
                      current.forEach(current => {
                        current.classList.remove('active')
                      })
                    }