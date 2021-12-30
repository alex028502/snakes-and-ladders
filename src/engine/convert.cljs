(ns engine.convert)

(defn ^:export getsequence [die]
  (repeatedly (fn [] (. (.next die) -value))))

(defn ^:export getclojure [x]
  (js->clj x))
