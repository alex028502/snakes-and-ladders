import java.util.Arrays;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Alert;


public class Test {
  public static void main(String []args) throws InterruptedException, MalformedURLException {
    WebDriver driver;
    // this is how the js one works by default
    String remote = System.getenv("SELENIUM_REMOTE_URL");
    if (remote == null) {
      driver = new ChromeDriver();
    } else {
      ChromeOptions chromeOptions = new ChromeOptions();
      driver = new RemoteWebDriver(new URL(remote), chromeOptions);
    }

    try {
      Thread.sleep(1000);
      String url = args[0];
      System.out.println("testing: " + url);
      driver.get(url);
      Thread.sleep(1000);
      driver.findElement(By.id("play-button")).click();
      Thread.sleep(1000);
      expectNoPlayersMessage(driver);
      String[] names = new String[] {"Java", "Clojure"};
      String entry = String.join(" \n\n ", names);
      driver.findElement(By.id("players")).sendKeys(entry);
      Thread.sleep(500);
      driver.findElement(By.id("play-button")).click();
      Thread.sleep(500);
      Thread.sleep(500);
      expectWinnerInList(driver, names);
      Thread.sleep(500);
      System.out.println("Success!");
    } finally {
      Thread.sleep(3000);
      driver.quit();
    }
  }

  private static void expectNoPlayersMessage(WebDriver driver) {
      Alert alert = driver.switchTo().alert();
      assert alert.getText().equals("no players"): alert.getText();
      alert.accept();
  }

  private static void expectWinnerInList(WebDriver driver, String[] names) {
      Alert alert = driver.switchTo().alert();
      String winner = alert.getText().replace(" wins!", "");
      assert Arrays.asList(names).contains(winner): alert.getText();
      alert.accept();
  }
}
