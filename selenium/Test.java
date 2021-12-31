import java.util.Arrays;
import java.net.MalformedURLException;
import java.net.URL;

// thanks https://mkyong.com/Java/how-to-send-http-request-getpost-in-Java/
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.conn.HttpHostConnectException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Alert;


public class Test {
  public static void main(String []args) throws Exception {
    String url = args[0];
    System.out.println("testing: " + url);
    assert checkStatus(url);

    WebDriver driver;
    // this is how the js one works by default
    String remote = System.getenv("SELENIUM_REMOTE_URL");
    ChromeOptions chromeOptions = new ChromeOptions();

    // for localhost this doesn't matter but on CI it does
    // but I can test it locally by running the tests with an ip address
    // TEST_DOMAIN=192.168.11.11 ./test.sh
    String allowSW = "--unsafely-treat-insecure-origin-as-secure=" + url;
    chromeOptions.addArguments(allowSW);
    if (remote == null) {
      driver = new ChromeDriver(chromeOptions);
    } else {
      driver = new RemoteWebDriver(new URL(remote), chromeOptions);
    }

    try {
      Thread.sleep(1000);
      driver.get(url);
      Thread.sleep(500);
      // load the page again to cache everything after installing sw
      // needs to be done before the server shuts off
      // make precache and network first work together to fix
      driver.navigate().refresh();
      Thread.sleep(500);
      pressPlay(driver);
      Thread.sleep(1000);
      expectNoPlayersMessage(driver);
      String[] names = new String[] {"Java", "Clojure"};
      String entry = String.join(" \n\n ", names);
      driver.findElement(By.id("players")).sendKeys(entry);
      Thread.sleep(500);
      driver.navigate().refresh();
      pressPlay(driver);
      Thread.sleep(500);
      expectWinnerInList(driver, names);
      Thread.sleep(500);
      driver.findElement(By.id("reset-button")).click();
      pressPlay(driver);
      expectNoPlayersMessage(driver);
      Thread.sleep(500);
      driver.navigate().refresh();
      pressPlay(driver);
      expectNoPlayersMessage(driver);
      String[] names2 = new String[] {"100", "200", "300"};
      driver.findElement(By.id("players")).sendKeys(String.join("\n", names2));
      pressPlay(driver);
      Thread.sleep(300);
      expectWinnerInList(driver, names2);
      pressPlay(driver);
      Thread.sleep(300);
      expectWinnerInList(driver, names2);
      driver.navigate().refresh();
      Thread.sleep(300);
      pressPlay(driver);
      Thread.sleep(300);
      expectWinnerInList(driver, names2);
      // server should be off by now: (there is a timeout in wrapper script)
      assert ! checkStatus(url);
      // test service worker caching:
      driver.navigate().refresh();
      pressPlay(driver);
      Thread.sleep(300);
      expectWinnerInList(driver, names2);
      System.out.println("Success!");
    } finally {
      Thread.sleep(3000);
      driver.quit();
    }
  }

  private static boolean checkStatus(String url) throws Exception {
    try {
      CloseableHttpClient httpClient = HttpClients.createDefault();
      HttpGet request = new HttpGet(url);
      httpClient.execute(request);
      return true;
    } catch (HttpHostConnectException e) {
      return false;
    }
  }

  private static void pressPlay(WebDriver driver) {
    driver.findElement(By.id("play-button")).click();
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
