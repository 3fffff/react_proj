interface Strategy {
  authenticate(args: any[]): boolean;
}

class LocalStrategy implements Strategy {
  authenticate(args: any[]) {
    const [username, password] = args;

    if (username !== "bytefer" && password !== "666") {
      console.log("Неправильное имя пользователя или пароль!");
      return false;
    }

    console.log("Аутентификация с помощью логина и пароля выполнена успешно!");
    return true;
  }
}

class Authenticator {
  strategies: Record<string, Strategy> = {};

  use(name: string, strategy: Strategy) {
    this.strategies[name] = strategy;
  }

  authenticate(name: string, ...args: any) {
    if (!this.strategies[name]) {
      console.error("Политика аутентификации не установлена!");
      return false;
    }

    return this.strategies[name].authenticate.apply(null, args);
  }
}
