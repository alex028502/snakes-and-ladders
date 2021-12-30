(ns app.core-test
  (:require [clojure.test :refer (deftest is)]
            [app.core]))

(deftest demo
  (is (= 2 2)))

;; since the end use only sees the end result, it is especially important to
;; test that the game is fair - especially that the roll to see who goes first
;; takes place as promised

;; to make sure the tests are running on the platform you think they are
;; uncomment one of these lines
;; (js/console.log "---- testing with node ----")
;; (.println (System/out) "---- testing with jvm ----")

(deftest roll-to-see-who-goes-first
  (is (= (app.core/play [1 3 6 6 6 6] 12 {} (list "clojure" "clojurescript"))
         "clojurescript wins!")))

(deftest higher-rolls
  (is (= (app.core/play [1 3 5 6 5 6] 12 {} (list "clojure" "clojurescript"))
         "clojure wins!")))

(deftest leader-hits-snake
  (is (= (app.core/play [3 1 6 5 5 5 5 5]
                        12
                        {"6" 1}
                        (list "clojure" "clojurescript"))
         "clojurescript wins!")))

(deftest loser-hits-ladder
  (is (= (app.core/play [3 1 6 5 5 5 5 5]
                        12
                        {"3" 1 "5" 10}
                        (list "clojure" "clojurescript"))
         "clojurescript wins!")))

;; this one was failing in the node test - so zeroing in on the problem by
;; running the same test here - this will tell me if the params are not being
;; converted properly or if the logic is wrong
(deftest control
  (let [die [3 ;; js rolls
             2 ;; cljs rolls
             5 ;; js goes to 5, slides to 1
             4 ;; cljs goes to 4
             5 ;; js goes to 6
             4]] ;; cljs goes to 8
    (is (= (app.core/play die 8 {"5" 1} (list "javascript" "clojurescript"))
           "clojurescript wins!"))))

;; I thought there might be a problem with roll to see who goes first but it
;; was just a problem with remembering what I had evaluated - but I should
;; remember to make it clear to the end user that if there is a tie for
;; highest, everybody gets to roll again, not just the users in the tie:
;; also notice that vectors get converted to lists along the way.
(deftest roll-to-see-who-goes-first
  (let [round1 [2 4 4]
        round2 [1 2 3]
        leftover (list 7 8 9 1)]
    (is (= (app.core/roll-to-see-who-goes-first ["A" "B" "C"]
                                                (concat round1 round2 leftover))
           (list (list "C" "A" "B") leftover)))))
