import { useState, useEffect, useRef } from "react";

function HomePage() {
  const [domainNm, setDm] = useState();
  const [ownerNm, setOwner] = useState();
  const [ownerID, setOwnerID] = useState();
  const [ownerNm2, setOwner2] = useState();
  const [ownerID2, setOwnerID2] = useState();
  const [loading, setLoad] = useState(false);
  const [searchInput, setSearch] = useState();

  

  async function updateDomain(e, a, b) {
    e.preventDefault();
    const res = await fetch(`/api/domain/${a}`, {
      method: "PUT",
      body: JSON.stringify({ ownerName: b }),
    });

    const data = await res.json();
    console.log(data);
  }

  async function submitData(e, a, b, c) {
    e.preventDefault();
    setLoad(true);

    const res = await fetch("/api/domain", {
      method: "POST",
      body: JSON.stringify({ domainName: a, ownerName: b, ownerID: c }),
    });

    const data = await res.json();

    console.log(data);

    if (data.error) {
      alert(data.error);
      setLoad(false);
    } else {
      setLoad(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>Domains Service Api</div>

      {loading ? (
        <div
          style={{
            ...styles.containerSm,
            backgroundColor: "grey",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Submitting...
        </div>
      ) : (
        <div style={styles.containerSm}>
          <div style={styles.doc}>
            <div>Documentation</div>
            <div style={{ padding: 40 }}>
              <div>Output is rendered in console</div>
              <div>/api/domain/byOwner/12345 *ORDER DATA BY OWNER ID</div>
              <div>/api/domain/search *GET ALL DATA FROM DB</div>
              <div>/api/domain/:ownerid *UPDATE DATA IN DB</div>

              <div>
                <p>To Work efficiently with this project create a .env file</p>
              </div>
            </div>
          </div>
          <div style={styles.form}>
            <div>Add Domain</div>
            <form
              onSubmit={(e) => submitData(e, domainNm, ownerNm, ownerID)}
              style={styles.formik}
            >
              <input
                style={styles.input}
                type="text"
                placeholder="Domain Name"
                value={domainNm}
                onChange={(e) => setDm(e.currentTarget.value)}
              />
              <input
                style={styles.input}
                type="text"
                placeholder="Owner Name"
                value={ownerNm}
                onChange={(e) => setOwner(e.currentTarget.value)}
              />
              <input
                style={styles.input}
                type="text"
                placeholder="Owner ID"
                value={ownerID}
                onChange={(e) => setOwnerID(e.currentTarget.value)}
              />
              <button
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  borderRadius: 10,
                  padding: 10,
                  color: "white",
                }}
              >
                Add Domain
              </button>
            </form>

            <div>Update Domain</div>
            <form
              onSubmit={(e) => updateDomain(e, ownerID2, ownerNm2)}
              method="PUT"
              action="/api/domain"
            >
              <input
                style={styles.input}
                type="text"
                placeholder="Owner ID"
                value={ownerID2}
                onChange={(e) => setOwnerID2(e.currentTarget.value)}
              />

              <input
                style={styles.input}
                type="text"
                placeholder="New Owner Name"
                value={ownerNm2}
                onChange={(e) => setOwner2(e.currentTarget.value)}
              />

              <button
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  borderRadius: 10,
                  padding: 10,
                  color: "white",
                }}
              >
                Update
              </button>
            </form>
            <div>Search Domain</div>
            <form
              /*onSubmit={(e) => searchDomain(e, searchInput)} */ action="/api/domain/search"
              method="GET"
            >
              <input
                style={styles.input}
                type="text"
                placeholder="Domain Name"
                value={searchInput}
                name="q"
                onChange={(e) => setSearch(e.currentTarget.value)}
              />

              <button
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  borderRadius: 10,
                  padding: 10,
                  color: "white",
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

const styles = {
  header: {
    color: "teal",
    fontSize: 20,
  },
  container: {
    margin: 20,
  },
  containerSm: {
    margin: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 500,
  },
  doc: {
    minWidth: 500,
    backgroundColor: "pink",
    flex: 1,
  },
  form: {
    minWidth: 500,
    backgroundColor: "teal",
    flex: 1,
  },
  formik: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },
  input: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "pink",
  },
};
