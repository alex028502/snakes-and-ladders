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
      String[] names = new String[] {"Java", "Clojure"};
      String entry = String.join(" \n\n ", names);
      driver.findElement(By.id("players")).sendKeys(entry);
      Thread.sleep(500);
      driver.findElement(By.id("play-button")).click();
      Thread.sleep(500);
      Alert alert = driver.switchTo().alert();
      Thread.sleep(500);
      String winner = alert.getText().replace(" wins!", "");
      assert Arrays.asList(names).contains(winner): alert.getText();
      alert.accept();
      Thread.sleep(500);
      System.out.println("Success!");
    } finally {
      Thread.sleep(3000);
      driver.quit();
    }
  }
}