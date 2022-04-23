let percent = 0
let time

function animate(id1, id2, start, end, duration) {
  if (start === end) return
  const range = end - start
  let current = start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(duration / range))
  const obj1 = document.getElementById(id1)
  const obj2 = document.getElementById(id2)
  const timer = setInterval(function () {
    current += increment
    obj1.innerHTML = current
    obj2.style.strokeDashoffset = `${440 - (440 * current) / 100}`
    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)
}

animate('percent1', 'circle1', 0, 60, 2000)
animate('percent2', 'circle2', 0, 35, 2000)
animate('percent3', 'circle3', 0, 10, 2000)
