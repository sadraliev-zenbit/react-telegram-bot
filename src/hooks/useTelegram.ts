const telegram = window.Telegram.WebApp

export function useTelegram () {
  return {
    user: telegram.initDataUnsafe.user,
    tg: telegram,
    ready: telegram.ready,
    close: telegram.close,
    mainButton: telegram.MainButton
  }
}
