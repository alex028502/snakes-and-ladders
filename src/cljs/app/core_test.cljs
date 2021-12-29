(ns app.core-test
  (:require [cljs.test :refer (deftest is)]
            [app.core]))

;; since the end use only sees the end result, it is especially important to
;; test that the game is fair - especially that the roll to see who goes first
;; takes place as promised

(deftest roll-to-see-who-goes-first
  (is (= (app.core.play [1 3 6 6 6 6] 12 {} (list "clojure" "clojurescript"))
         "clojurescript wins!")))

(deftest higher-rolls
  (is (= (app.core.play [1 3 5 6 5 6] 12 {} (list "clojure" "clojurescript"))
         "clojure wins!")))

(deftest leader-hits-snake
  (is (= (app.core.play [3 1 6 5 5 5 5 5]
                        12
                        {"6" 1}
                        (list "clojure" "clojurescript"))
         "clojurescript wins!")))

(deftest loser-hits-ladder
  (is (= (app.core.play [3 1 6 5 5 5 5 5]
                        12
                        {"3" 1 "5" 10}
                        (list "clojure" "clojurescript"))
         "clojurescript wins!")))
