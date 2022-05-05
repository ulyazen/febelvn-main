const faqQuestions = document.querySelectorAll('.faq-question')
const faqAnswers = document.querySelectorAll('.faq-answer')
const faqLists = document.querySelectorAll('.faq-list')

const handleClickQuestion = (e) => {
  const element = e.composedPath().find((element) => {
    if (element.classList) {
      return element.classList.contains('faq-question')
    }

    return false
  })

  const faqList = element.closest('.faq-list')
  const faqAnswer = faqList.querySelector('.faq-answer')

  if (faqAnswer.classList.contains('show-answer')) {
    return showAnswer(element, false)
  } else {
    showAnswer(element, true)
  }
}

const showAnswer = (element, isShow) => {
  const faqList = element.closest('.faq-list')
  const faqAnswer = faqList.querySelector('.faq-answer')

  const heightOfFaqAnswer = faqAnswer.scrollHeight

  if (isShow) {
    faqAnswer.style.height = `${heightOfFaqAnswer}px`
    faqAnswer.classList.toggle('show-answer')

    faqAnswer.addEventListener(
      'transitionend',
      () => {
        faqList.style.removeProperty('height')
      },
      { once: true }
    )
  } else {
    faqAnswer.classList.remove('show-answer')
    setTimeout(() => {
      faqAnswer.style.removeProperty('height')
    })
  }
}

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener('click', handleClickQuestion)
})

faqAnswers.forEach((faqAnswer) => {
  faqAnswer.addEventListener('click', (e) => e.stopPropagation())
})
